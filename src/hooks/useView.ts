import { useContext } from 'react';
import ViewContext from '@/contexts/ViewContext';
import type { ViewContextType } from '@/types/view';

/**
 * useView Hook - Healthcare Dashboard
 * 
 * Custom hook for consuming ViewContext to access current view mode
 * and view configuration throughout the application.
 * 
 * @returns ViewContextType - Current view state and configuration
 * @throws Error if used outside ViewProvider
 */
export const useView = (): ViewContextType => {
  const context = useContext(ViewContext);
  
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  
  return context;
};

export default useView;
