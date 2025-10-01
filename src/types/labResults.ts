export type LabStatus = 'normal' | 'high' | 'elevated' | 'low' | 'critical' | 'warning' | 'pending';


export type TestCategory = 
  | 'blood-chemistry'
  | 'hematology'
  | 'immunology'
  | 'cardiology'
  | 'endocrinology'
  | 'other';

export type TrendDirection = 'up' | 'down' | 'stable' | 'increasing' | 'decreasing';

export interface ReferenceRange {
  min?: number;
  max?: number;
  unit: string;
}

export interface LabValue {
  numeric?: number;
  text?: string;
  unit?: string;
}

export interface LabResult {
  // Identification
  biomarkerId: string;
  testCode: string;
  testName: string;
  category: TestCategory;
  
  // Patient & Order Information
  patientId: string;
  orderingPhysician: string;
  
  // Test Details
  value: LabValue;
  status: LabStatus;
  referenceRange?: ReferenceRange;
  
  // Timing
  collectionDate: string;
  resultDate: string;
  
  // Clinical Context
  specimen: string; // blood, urine, etc.
  
  // Flags & Notes
  abnormalFlags: string[];
  notes?: string;
  
  // Trending
  trendDirection?: TrendDirection;
  percentChange?: number;
}

/**
 * Biomarker definition for consistent test identification
 */
export interface Biomarker {
  id: string;
  code: string;
  name: string;
  category: TestCategory;
  defaultUnit: string;
  referenceRange: ReferenceRange;
  description?: string;
}

/**
 * Trend data for historical analysis
 */
export interface TrendDataPoint {
  date: string;
  value: number;
  status: LabStatus;
  referenceRange?: ReferenceRange;
}

export interface TrendData {
  biomarkerId: string;
  patientId: string;
  dataPoints: TrendDataPoint[];
  overallTrend: TrendDirection;
  startDate: string;
  endDate: string;
}

/**
 * Utility types for lab results
 */
export type LabResultSummary = Pick<
  LabResult,
  'id' | 'testName' | 'value' | 'status' | 'resultDate' | 'abnormalFlags'
>;

/**
 * Search and filtering types
 */
export interface LabResultSearchCriteria {
  patientId?: string;
  testCodes?: string[];
  categories?: TestCategory[];
  statuses?: LabStatus[];
  dateRange?: {
    start: string;
    end: string;
  };
  abnormalOnly?: boolean;
}

export interface LabResultsGroup {
  date: string;
  results: LabResult[];
  orderingPhysician: string;
  hasAbnormalResults: boolean;
}

/**
 * Chart and visualization types
 */
export interface ChartDataPoint {
  x: string | number;
  y: number;
  status?: LabStatus;
  referenceMin?: number;
  referenceMax?: number;
}

export interface ChartSeries {
  id: string;
  name: string;
  data: ChartDataPoint[];
  color?: string;
  unit?: string;
  biomarkerId?: string;
}
