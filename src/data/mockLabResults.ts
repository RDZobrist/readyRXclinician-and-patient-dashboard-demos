/**
 * Mock Lab Results Data for Healthcare Dashboard Demo
 * Realistic lab values with proper medical context
 */

import type { LabResult, Biomarker, ReferenceRange } from '@/types';

// Common biomarkers with reference ranges
export const mockBiomarkers: Biomarker[] = [
  {
    id: 'glucose',
    code: 'GLU',
    name: 'Glucose',
    category: 'blood-chemistry',
    defaultUnit: 'mg/dL',
    referenceRange: { min: 70, max: 99, unit: 'mg/dL' } as ReferenceRange,
    description: 'Blood sugar level - fasting'
  },
  {
    id: 'hba1c',
    code: 'HBA1C',
    name: 'Hemoglobin A1c',
    category: 'endocrinology',
    defaultUnit: '%',
    referenceRange: { min: 4.0, max: 5.6, unit: '%' } as ReferenceRange,
    description: '3-month average blood sugar'
  },
  {
    id: 'cholesterol-total',
    code: 'CHOL',
    name: 'Total Cholesterol',
    category: 'blood-chemistry',
    defaultUnit: 'mg/dL',
    referenceRange: { max: 200, unit: 'mg/dL' } as ReferenceRange,
    description: 'Total cholesterol level'
  },
  {
    id: 'ldl',
    code: 'LDL',
    name: 'LDL Cholesterol',
    category: 'blood-chemistry',
    defaultUnit: 'mg/dL',
    referenceRange: { max: 100, unit: 'mg/dL' } as ReferenceRange,
    description: 'Low-density lipoprotein (bad cholesterol)'
  },
  {
    id: 'hdl',
    code: 'HDL',
    name: 'HDL Cholesterol',
    category: 'blood-chemistry',
    defaultUnit: 'mg/dL',
    referenceRange: { min: 40, unit: 'mg/dL' } as ReferenceRange,
    description: 'High-density lipoprotein (good cholesterol)'
  },
  {
    id: 'triglycerides',
    code: 'TRIG',
    name: 'Triglycerides',
    category: 'blood-chemistry',
    defaultUnit: 'mg/dL',
    referenceRange: { max: 150, unit: 'mg/dL' } as ReferenceRange,
    description: 'Blood fat levels'
  },
  {
    id: 'creatinine',
    code: 'CREAT',
    name: 'Creatinine',
    category: 'blood-chemistry',
    defaultUnit: 'mg/dL',
    referenceRange: { min: 0.6, max: 1.2, unit: 'mg/dL' } as ReferenceRange,
    description: 'Kidney function marker'
  },
  {
    id: 'hemoglobin',
    code: 'HGB',
    name: 'Hemoglobin',
    category: 'hematology',
    defaultUnit: 'g/dL',
    referenceRange: { min: 12.0, max: 15.5, unit: 'g/dL' } as ReferenceRange,
    description: 'Oxygen-carrying protein in blood'
  }
];

// Recent lab results for Sarah Mitchell (our main patient)
export const mockLabResults: LabResult[] = [
  {
    id: 'lab-001',
    testCode: 'GLU',
    testName: 'Glucose',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 145, unit: 'mg/dL' },
    status: 'warning',
    referenceRange: { min: 70, max: 99, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T10:30:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    notes: 'Fasting glucose elevated. Consider medication adjustment.',
    trendDirection: 'up',
    percentChange: 12.5
  },
  {
    id: 'lab-002',
    testCode: 'HBA1C',
    testName: 'Hemoglobin A1c',
    category: 'endocrinology',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 7.2, unit: '%' },
    status: 'warning',
    referenceRange: { min: 4.0, max: 5.6, unit: '%' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T14:15:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    notes: 'Indicates suboptimal diabetes control over past 3 months.',
    trendDirection: 'up',
    percentChange: 8.3
  },
  {
    id: 'lab-003',
    testCode: 'CHOL',
    testName: 'Total Cholesterol',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 185, unit: 'mg/dL' },
    status: 'normal',
    referenceRange: { max: 200, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T11:45:00Z',
    specimen: 'blood',
    abnormalFlags: [],
    notes: 'Within normal limits.',
    trendDirection: 'down',
    percentChange: -5.2
  },
  {
    id: 'lab-004',
    testCode: 'LDL',
    testName: 'LDL Cholesterol',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 125, unit: 'mg/dL' },
    status: 'warning',
    referenceRange: { max: 100, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T11:45:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    notes: 'Elevated LDL. Continue statin therapy.',
    trendDirection: 'stable',
    percentChange: 2.1
  },
  {
    id: 'lab-005',
    testCode: 'HDL',
    testName: 'HDL Cholesterol',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 48, unit: 'mg/dL' },
    status: 'normal',
    referenceRange: { min: 40, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T11:45:00Z',
    specimen: 'blood',
    abnormalFlags: [],
    notes: 'Good HDL level.',
    trendDirection: 'stable',
    percentChange: 0.8
  },
  {
    id: 'lab-006',
    testCode: 'TRIG',
    testName: 'Triglycerides',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 165, unit: 'mg/dL' },
    status: 'warning',
    referenceRange: { max: 150, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T11:45:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    notes: 'Slightly elevated triglycerides.',
    trendDirection: 'up',
    percentChange: 6.8
  },
  {
    id: 'lab-007',
    testCode: 'CREAT',
    testName: 'Creatinine',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 0.9, unit: 'mg/dL' },
    status: 'normal',
    referenceRange: { min: 0.6, max: 1.2, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T13:20:00Z',
    specimen: 'blood',
    abnormalFlags: [],
    notes: 'Normal kidney function.',
    trendDirection: 'stable',
    percentChange: -1.2
  },
  {
    id: 'lab-008',
    testCode: 'HGB',
    testName: 'Hemoglobin',
    category: 'hematology',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 13.5, unit: 'g/dL' },
    status: 'normal',
    referenceRange: { min: 12.0, max: 15.5, unit: 'g/dL' } as ReferenceRange,
    collectionDate: '2024-01-10T08:00:00Z',
    resultDate: '2024-01-10T12:00:00Z',
    specimen: 'blood',
    abnormalFlags: [],
    notes: 'Normal hemoglobin level.',
    trendDirection: 'stable',
    percentChange: 0.5
  }
];

// Historical lab results for trending (last 6 months)
export const mockHistoricalResults: LabResult[] = [
  // Previous HbA1c results
  {
    id: 'lab-h001',
    testCode: 'HBA1C',
    testName: 'Hemoglobin A1c',
    category: 'endocrinology',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 6.8, unit: '%' },
    status: 'warning',
    referenceRange: { min: 4.0, max: 5.6, unit: '%' } as ReferenceRange,
    collectionDate: '2023-10-15T08:00:00Z',
    resultDate: '2023-10-15T14:00:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    trendDirection: 'stable'
  },
  {
    id: 'lab-h002',
    testCode: 'HBA1C',
    testName: 'Hemoglobin A1c',
    category: 'endocrinology',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 6.9, unit: '%' },
    status: 'warning',
    referenceRange: { min: 4.0, max: 5.6, unit: '%' } as ReferenceRange,
    collectionDate: '2023-07-20T08:00:00Z',
    resultDate: '2023-07-20T14:00:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    trendDirection: 'up'
  },
  // Previous Glucose results
  {
    id: 'lab-h003',
    testCode: 'GLU',
    testName: 'Glucose',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 128, unit: 'mg/dL' },
    status: 'warning',
    referenceRange: { min: 70, max: 99, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2023-10-15T08:00:00Z',
    resultDate: '2023-10-15T10:30:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    trendDirection: 'stable'
  },
  {
    id: 'lab-h004',
    testCode: 'GLU',
    testName: 'Glucose',
    category: 'blood-chemistry',
    patientId: 'patient-001',
    orderingPhysician: 'Dr. Sarah Johnson',
    value: { numeric: 118, unit: 'mg/dL' },
    status: 'warning',
    referenceRange: { min: 70, max: 99, unit: 'mg/dL' } as ReferenceRange,
    collectionDate: '2023-07-20T08:00:00Z',
    resultDate: '2023-07-20T10:30:00Z',
    specimen: 'blood',
    abnormalFlags: ['HIGH'],
    trendDirection: 'up'
  }
];

// Combined results for easy access
export const allLabResults = [...mockLabResults, ...mockHistoricalResults];