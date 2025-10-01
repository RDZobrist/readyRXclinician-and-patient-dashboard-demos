import React from 'react';
import { PatientProvider } from '@/contexts/PatientContext';

/**
 * withPatientContext HOC
 * 
 * SINGLE RESPONSIBILITY: Wraps components with PatientProvider context
 * 
 * Higher-Order Component that automatically provides patient context to any component.
 * Useful for components that need patient data but don't want to manually wrap with provider.
 * 
 * @param Component - Component to wrap with patient context
 * @returns Component wrapped with PatientProvider
 * 
 * @example
 * ```tsx
 * const MyComponent = ({ title }: { title: string }) => {
 *   const { selectedPatient } = usePatient();
 *   return <h1>{title} - {selectedPatient.name}</h1>;
 * };
 * 
 * export default withPatientContext(MyComponent);
 * ```
 */
export const withPatientContext = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WrappedComponent = (props: P) => (
    <PatientProvider>
      <Component {...props} />
    </PatientProvider>
  );
  
  WrappedComponent.displayName = `withPatientContext(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

export default withPatientContext;
