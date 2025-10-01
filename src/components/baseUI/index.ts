/**
 * Base UI Components - Healthcare Dashboard
 * Foundational components for the component library
 */

// Core components
export { Button } from './Button';
export { Badge } from './Badge';
export { Card } from './Card';
export { 
  Loading, 
  PatientDataLoading, 
  LabResultsLoading, 
  ChartLoading,
  SkeletonLoader
} from './Loading';
export { 
  ErrorBoundary, 
  PatientDataErrorBoundary, 
  LabResultsErrorBoundary, 
  ChartErrorBoundary 
} from './ErrorBoundary';
export { Table } from './Table';
export { ViewSelector } from './ViewSelector';
export { DisclaimerBanner } from './DisclaimerBanner';
export { Tooltip } from './Tooltip';
export { MedicalTooltip } from './MedicalTooltip';

// Re-export types for convenience
export type { 
  ButtonProps, 
  BadgeProps, 
  CardProps,
  LoadingProps,
  TableProps,
  TableColumn,
  ViewSelectorProps,
} from '@/types';