/**
 * View System Types - Healthcare Dashboard
 * Defines types for Patient vs Clinician view modes
 */

export type UserRole = 'patient' | 'clinician' | 'administrator';

export type ViewMode = 'patient-view' | 'clinician-view';

export interface ViewConfig {
  mode: ViewMode;
  role: UserRole;
  showTechnicalDetails: boolean;
  showAllPatients: boolean;
  simplifiedLanguage: boolean;
  showEducationalContent: boolean;
}

export interface ViewSelectorProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  disabled?: boolean;
  className?: string;
  testId?: string;
}

export interface ViewContextType {
  currentView: ViewMode;
  viewConfig: ViewConfig;
  setView: (view: ViewMode) => void;
  isPatientView: boolean;
  isClinicianView: boolean;
}

// Predefined view configurations
export const VIEW_CONFIGS: Record<ViewMode, ViewConfig> = {
  'patient-view': {
    mode: 'patient-view',
    role: 'patient',
    showTechnicalDetails: false,
    showAllPatients: false,
    simplifiedLanguage: true,
    showEducationalContent: true,
  },
  'clinician-view': {
    mode: 'clinician-view',
    role: 'clinician',
    showTechnicalDetails: true,
    showAllPatients: true,
    simplifiedLanguage: false,
    showEducationalContent: false,
  },
};
