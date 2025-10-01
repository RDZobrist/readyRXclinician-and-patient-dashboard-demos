/**
 * Patient Types for Healthcare Dashboard
 * Comprehensive interfaces for patient data management
 */

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  prescribedDate: string;
  prescribingPhysician: string;
  status: 'active' | 'discontinued' | 'paused';
  notes?: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
  email?: string;
}

export interface InsuranceInfo {
  provider: string;
  policyNumber: string;
  groupNumber?: string;
  effectiveDate: string;
  expirationDate?: string;
}

export interface PatientPreferences {
  communicationMethod: 'email' | 'phone' | 'text' | 'portal';
  language: string;
  timezone: string;
  notifications: {
    labResults: boolean;
    appointments: boolean;
    medications: boolean;
  };
}

// Simplified Patient interface for basic use cases
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  conditions: string[];
  demographics: {
    address: Address;
    phone: string;
    email: string;
    emergencyContact: EmergencyContact;
    insuranceInfo: InsuranceInfo;
    preferences: PatientPreferences;
    alerts: [];
  }
}

// Patient summary for dashboard display
export interface PatientSummary {
  id: string;
  name: string;
  age: number;
  primaryCondition: string;
  lastLabDate: string;
  criticalAlerts: number;
  upcomingAppointments: number;
}

// Patient search and filtering
export interface PatientSearchCriteria {
  name?: string;
  condition?: string;
  ageRange?: {
    min: number;
    max: number;
  };
  gender?: string;
  status?: Patient['status'];
}

export type PatientSortField = 'name' | 'age' | 'condition' | 'lastUpdated';
export type SortDirection = 'asc' | 'desc';

export interface PatientSortOptions {
  field: PatientSortField;
  direction: SortDirection;
}