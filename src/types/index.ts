export type { Patient, Demographics, Address, EmergencyContact, Insurance } from './patient';
export type { MedicalHistory, Condition, Allergy, Medication, FamilyHistory, SocialHistory } from './patient';
export type { CareTeam, Physician, Alert, Preferences, NotificationSettings } from './patient';

export type { 
  LabResult, 
  LabValue, 
  ReferenceRange, 
  LabStatus, 
  TestCategory,
  TrendDirection,
  Biomarker,
  TrendData,
  TrendDataPoint,
  LabResultSummary,
  LabResultSearchCriteria,
  LabResultsGroup,
  ChartDataPoint,
  ChartSeries
} from './labResults';

// Component Props
export type {
  BaseComponentProps,
  ComponentSize,
  ComponentVariant,
  ButtonProps,
  CardProps,
  BadgeProps,
  TableProps,
  TableColumn,
  TableRow,
  LoadingProps,
  ErrorBoundaryProps,
  ErrorFallbackProps
} from './components';

// View System
export type {
  UserRole,
  ViewMode,
  ViewConfig,
  ViewSelectorProps,
  ViewContextType
} from './view';

export { VIEW_CONFIGS } from './view';