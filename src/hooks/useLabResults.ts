import { useState, useMemo } from 'react';
import { usePatient } from './usePatient';
import { mockLabResults, mockBiomarkers } from '@/data/mockLabResults';
import type { LabResult, Biomarker, LabStatus } from '@/types';

/**
 * useLabResults Hook
 * 
 * Comprehensive hook for lab results data management, filtering, sorting, and analysis.
 * Integrates with PatientContext for synchronized patient-specific lab data.
 * 
 * @example
 * ```tsx
 * const {
 *   labResults,
 *   filteredResults,
 *   searchResults,
 *   sortResults,
 *   filterByStatus,
 *   isLoading,
 *   error,
 *   stats
 * } = useLabResults();
 * ```
 */

export interface LabResultsFilter {
  status?: LabStatus[];
  biomarkerIds?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  flaggedOnly?: boolean;
  searchQuery?: string;
}

export interface LabResultsSortOptions {
  field: 'testName' | 'value' | 'resultDate' | 'status';
  direction: 'asc' | 'desc';
}

export interface LabResultsStats {
  total: number;
  byStatus: Record<LabStatus, number>;
  byBiomarker: Record<string, number>;
  flaggedCount: number;
  recentCount: number; // Results from last 30 days
  criticalCount: number;
  dateRange: {
    earliest: string;
    latest: string;
  };
}

export interface UseLabResultsReturn {
  /** All lab results for current patient */
  labResults: LabResult[];
  /** Filtered and sorted lab results */
  filteredResults: LabResult[];
  /** Available biomarkers */
  biomarkers: Biomarker[];
  /** Search lab results by query */
  searchResults: (query: string) => void;
  /** Filter lab results */
  filterResults: (filter: LabResultsFilter) => void;
  /** Sort lab results */
  sortResults: (options: LabResultsSortOptions) => void;
  /** Filter by specific status */
  filterByStatus: (status: LabStatus[]) => void;
  /** Filter by biomarker */
  filterByBiomarker: (biomarkerIds: string[]) => void;
  /** Clear all filters */
  clearFilters: () => void;
  /** Get results for specific biomarker */
  getResultsForBiomarker: (biomarkerId: string) => LabResult[];
  /** Get latest result for biomarker */
  getLatestResult: (biomarkerId: string) => LabResult | undefined;
  /** Check if biomarker has critical values */
  hasCriticalValues: (biomarkerId: string) => boolean;
  /** Loading state */
  isLoading: boolean;
  /** Error state */
  error: string | null;
  /** Current filter state */
  currentFilter: LabResultsFilter;
  /** Current sort options */
  currentSort: LabResultsSortOptions;
  /** Lab results statistics */
  stats: LabResultsStats;
}

export const useLabResults = (): UseLabResultsReturn => {
  const { selectedPatient } = usePatient();
  
  // State for filtering and sorting
  const [currentFilter, setCurrentFilter] = useState<LabResultsFilter>({});
  const [currentSort, setCurrentSort] = useState<LabResultsSortOptions>({
    field: 'resultDate',
    direction: 'desc'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get lab results for current patient
  const labResults = useMemo((): LabResult[] => {
    return mockLabResults.filter(result => result.patientId === selectedPatient.id);
  }, [selectedPatient.id]);

  // Apply filters and sorting
  const filteredResults = useMemo((): LabResult[] => {
    let filtered = [...labResults];
    const statusPriority = {
        'critical': 7,
        'high': 6,
        'elevated': 5,
        'warning': 4,
        'low': 3,
        'normal': 2,
        'pending': 1
      };

    // Apply status filter
    if (currentFilter.status && currentFilter.status.length > 0) {
      filtered = filtered.filter(result => 
        currentFilter.status!.includes(result.status)
      );
    }

    // Apply biomarker filter
    if (currentFilter.biomarkerIds && currentFilter.biomarkerIds.length > 0) {
      filtered = filtered.filter(result => 
        currentFilter.biomarkerIds!.includes(result.biomarkerId)
      );
    }

    // Apply date range filter
    if (currentFilter.dateRange) {
      const { start, end } = currentFilter.dateRange;
      filtered = filtered.filter(result => {
        const resultDate = new Date(result.resultDate);
        const startDate = new Date(start);
        const endDate = new Date(end);
        return resultDate >= startDate && resultDate <= endDate;
      });
    }

    // Apply flagged only filter
    if (currentFilter.flaggedOnly) {
      filtered = filtered.filter(result => result.abnormalFlags.length > 0);
    }

    // Apply search query
    if (currentFilter.searchQuery) {
      const query = currentFilter.searchQuery.toLowerCase();
      filtered = filtered.filter(result =>
        result.testName.toLowerCase().includes(query) ||
        result.value.toString().toLowerCase().includes(query) ||
        result.unit.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const { field, direction } = currentSort;
      let aValue: string | number | Date;
      let bValue: string | number | Date;

      switch (field) {
        case 'testName':
          aValue = a.testName.toLowerCase();
          bValue = b.testName.toLowerCase();
          break;
        case 'value':
          aValue = typeof a.value === 'number' ? a.value : parseFloat(a.value.toString()) || 0;
          bValue = typeof b.value === 'number' ? b.value : parseFloat(b.value.toString()) || 0;
          break;
        case 'resultDate':
          aValue = new Date(a.resultDate);
          bValue = new Date(b.resultDate);
          break;
        case 'status':
          // Sort by status priority: critical > high > elevated > warning > low > normal > pending
          aValue = statusPriority[a.status] || 0;
          bValue = statusPriority[b.status] || 0;
          break;
        default:
          aValue = a.testName.toLowerCase();
          bValue = b.testName.toLowerCase();
      }

      if (aValue < bValue) {
        return direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [labResults, currentFilter, currentSort]);

  // Calculate statistics
  const stats = useMemo((): LabResultsStats => {
    const total = labResults.length;
    
    // Group by status
    const byStatus = labResults.reduce((acc, result) => {
      acc[result.status] = (acc[result.status] || 0) + 1;
      return acc;
    }, {} as Record<LabStatus, number>);

    // Group by biomarker
    const byBiomarker = labResults.reduce((acc, result) => {
      acc[result.testName] = (acc[result.testName] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Count flagged results
    const flaggedCount = labResults.filter(result => result.abnormalFlags.length > 0).length;

    // Count recent results (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentCount = labResults.filter(result => 
      new Date(result.resultDate) >= thirtyDaysAgo
    ).length;

    // Count critical results
    const criticalCount = labResults.filter(result => result.status === 'critical').length;

    // Date range
    const dates = labResults.map(result => new Date(result.resultDate));
    const earliest = dates.length > 0 ? new Date(Math.min(...dates.map(d => d.getTime()))).toISOString() : '';
    const latest = dates.length > 0 ? new Date(Math.max(...dates.map(d => d.getTime()))).toISOString() : '';

    return {
      total,
      byStatus,
      byBiomarker,
      flaggedCount,
      recentCount,
      criticalCount,
      dateRange: { earliest, latest }
    };
  }, [labResults]);

  // Hook functions
  const searchResults = (query: string) => {
    setCurrentFilter(prev => ({ ...prev, searchQuery: query }));
  };

  const filterResults = (filter: LabResultsFilter) => {
    setCurrentFilter(filter);
  };

  const sortResults = (options: LabResultsSortOptions) => {
    setCurrentSort(options);
  };

  const filterByStatus = (status: LabStatus[]) => {
    setCurrentFilter(prev => ({ ...prev, status }));
  };

  const filterByBiomarker = (biomarkerIds: string[]) => {
    setCurrentFilter(prev => ({ ...prev, biomarkerIds }));
  };

  const clearFilters = () => {
    setCurrentFilter({});
    setCurrentSort({
      field: 'resultDate',
      direction: 'desc'
    });
  };

  const getResultsForBiomarker = (biomarkerId: string): LabResult[] => {
    return labResults.filter(result => result.biomarkerId === biomarkerId);
  };

  const getLatestResult = (biomarkerId: string): LabResult | undefined => {
    const biomarkerResults = getResultsForBiomarker(biomarkerId);
    return biomarkerResults.sort((a, b) => 
      new Date(b.resultDate).getTime() - new Date(a.resultDate).getTime()
    )[0];
  };

  const hasCriticalValues = (biomarkerId: string): boolean => {
    const biomarkerResults = getResultsForBiomarker(biomarkerId);
    return biomarkerResults.some(result => result.status === 'critical');
  };

  return {
    labResults,
    filteredResults,
    biomarkers: mockBiomarkers,
    searchResults,
    filterResults,
    sortResults,
    filterByStatus,
    filterByBiomarker,
    clearFilters,
    getResultsForBiomarker,
    getLatestResult,
    hasCriticalValues,
    isLoading,
    error,
    currentFilter,
    currentSort,
    stats
  };
};

export default useLabResults;
