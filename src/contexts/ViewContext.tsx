import React, { createContext, useState, ReactNode, useCallback } from 'react';
import type { ViewMode, ViewConfig, ViewContextType } from '@/types/view';
import { VIEW_CONFIGS } from '@/types/view';

/**
 * View Context for Healthcare Dashboard
 * 
 * SINGLE RESPONSIBILITY: Manages view mode state (Patient vs Clinician) across the application
 * 
 * Provides centralized view state management to ensure all components
 * render appropriately for the selected user role and view mode.
 */

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export interface ViewProviderProps {
  children: ReactNode;
  initialView?: ViewMode;
}

export const ViewProvider: React.FC<ViewProviderProps> = ({
  children,
  initialView = 'clinician-view' // Default to clinician view
}) => {
  const [currentView, setCurrentView] = useState<ViewMode>(initialView);

  const setView = useCallback((view: ViewMode) => {
    setCurrentView(view);
  }, []);

  const viewConfig: ViewConfig = VIEW_CONFIGS[currentView];
  
  const isPatientView = currentView === 'patient-view';
  const isClinicianView = currentView === 'clinician-view';

  const contextValue: ViewContextType = {
    currentView,
    viewConfig,
    setView,
    isPatientView,
    isClinicianView,
  };

  return (
    <ViewContext.Provider value={contextValue}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContext;
