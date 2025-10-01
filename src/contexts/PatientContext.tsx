import React, { createContext, useState, ReactNode } from 'react';
import { patients } from '@/data';
import type { Patient } from '@/types/patient';

/**
 * Patient Context for Healthcare Dashboard
 * 
 * SINGLE RESPONSIBILITY: Manages patient selection state across the application
 * 
 * Provides centralized patient state management to ensure lab results, 
 * trend charts, and other patient-specific data stay synchronized.
 */

export interface PatientContextType {
  selectedPatient: Patient;
  patients: Patient[];
  setSelectedPatient: (patient: Patient) => void;
  selectPatientById: (patientId: string) => void;
  selectPatientByName: (patientName: string) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export interface PatientProviderProps {
  children: ReactNode;
  initialPatient?: Patient;
}

export const PatientProvider: React.FC<PatientProviderProps> = ({
  children,
  initialPatient
}) => {
  const [selectedPatient, setSelectedPatient] = useState<Patient>(
    initialPatient || patients[0]
  );

  const selectPatientById = (patientId: string) => {
    const patient = patients.find(p => p.id === patientId);
    if (patient) {
      setSelectedPatient(patient);
    }
  };

  const selectPatientByName = (patientName: string) => {
    const patient = patients.find(p => p.name === patientName);
    if (patient) {
      setSelectedPatient(patient);
    }
  };

  const contextValue: PatientContextType = {
    selectedPatient,
    patients,
    setSelectedPatient,
    selectPatientById,
    selectPatientByName
  };

  return (
    <PatientContext.Provider value={contextValue}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;
