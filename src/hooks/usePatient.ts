import { useContext } from 'react';
import PatientContext, { type PatientContextType } from '@/contexts/PatientContext';

/**
 * usePatient Hook
 * 
 * SINGLE RESPONSIBILITY: Provides safe access to patient context with error handling
 * 
 * Custom hook to safely access the Patient Context with proper error boundaries.
 * Ensures components can only use patient data when properly wrapped with PatientProvider.
 * 
 * @returns PatientContextType with patient state and actions
 * @throws Error if used outside of PatientProvider
 * 
 * @example
 * ```tsx
 * const { selectedPatient, setSelectedPatient } = usePatient();
 * 
 * // Switch to different patient
 * const handlePatientChange = (newPatient: Patient) => {
 *   setSelectedPatient(newPatient);
 * };
 * ```
 */
export const usePatient = (): PatientContextType => {
  const context = useContext(PatientContext);
  
  if (context === undefined) {
    throw new Error(
      'usePatient must be used within a PatientProvider. ' +
      'Make sure your component is wrapped with <PatientProvider>.'
    );
  }
  
  return context;
};

export default usePatient;
