/**
 * Mock Trend Data for Healthcare Dashboard Charts
 * 6 months of historical biomarker data for visualization
 */

import type { TrendData, TrendDataPoint, ChartSeries } from '@/types';

// Sarah Mitchell - HbA1c trend data (6 months) - original data
export const hba1cTrendData: TrendData = {
  biomarkerId: 'hba1c',
  patientId: 'patient-001',
  dataPoints: [
    {
      date: '2023-07-20',
      value: 6.9,
      status: 'warning',
      referenceRange: { min: 4.0, max: 5.6, unit: '%' }
    },
    {
      date: '2023-08-25',
      value: 6.8,
      status: 'warning',
      referenceRange: { min: 4.0, max: 5.6, unit: '%' }
    },
    {
      date: '2023-10-15',
      value: 6.8,
      status: 'warning',
      referenceRange: { min: 4.0, max: 5.6, unit: '%' }
    },
    {
      date: '2023-11-20',
      value: 7.0,
      status: 'high',
      referenceRange: { min: 4.0, max: 5.6, unit: '%' }
    },
    {
      date: '2023-12-18',
      value: 7.1,
      status: 'high',
      referenceRange: { min: 4.0, max: 5.6, unit: '%' }
    },
    {
      date: '2024-01-15',
      value: 7.2,
      status: 'high',
      referenceRange: { min: 4.0, max: 5.6, unit: '%' }
    } as TrendDataPoint
  ],
  overallTrend: 'increasing',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

// David McDonald - Blood Pressure trend (improving)
export const davidBpTrendData: TrendData = {
  biomarkerId: 'systolic_bp',
  patientId: 'patient-002',
  dataPoints: [
    { date: '2023-07-20', value: 155, status: 'high', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-08-25', value: 148, status: 'high', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-10-15', value: 145, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-11-20', value: 142, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-12-18', value: 138, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-01-15', value: 142, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } }
  ] as TrendDataPoint[],
  overallTrend: 'decreasing',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

// Maria Rodriguez - Cholesterol trend (stable high)
export const mariaCholesterolTrendData: TrendData = {
  biomarkerId: 'total_cholesterol',
  patientId: 'patient-003',
  dataPoints: [
    { date: '2023-07-20', value: 290, status: 'high', referenceRange: { min: 100, max: 200, unit: 'mg/dL' } },
    { date: '2023-08-25', value: 285, status: 'high', referenceRange: { min: 100, max: 200, unit: 'mg/dL' } },
    { date: '2023-10-15', value: 288, status: 'high', referenceRange: { min: 100, max: 200, unit: 'mg/dL' } },
    { date: '2023-11-20', value: 285, status: 'high', referenceRange: { min: 100, max: 200, unit: 'mg/dL' } },
    { date: '2023-12-18', value: 287, status: 'high', referenceRange: { min: 100, max: 200, unit: 'mg/dL' } },
    { date: '2024-01-15', value: 285, status: 'high', referenceRange: { min: 100, max: 200, unit: 'mg/dL' } }
  ] as TrendDataPoint[],
  overallTrend: 'stable',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

// James Chen - Glucose trend (healthy, normal)
export const jamesGlucoseTrendData: TrendData = {
  biomarkerId: 'glucose',
  patientId: 'patient-004',
  dataPoints: [
    { date: '2023-07-20', value: 88, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-08-25', value: 85, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-10-15', value: 82, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-11-20', value: 86, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-12-18', value: 84, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2024-01-15', value: 85, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } }
  ] as TrendDataPoint[],
  overallTrend: 'stable',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

// Linda Johnson - HbA1c trend (pre-diabetes, increasing)
export const lindaHba1cTrendData: TrendData = {
  biomarkerId: 'hba1c',
  patientId: 'patient-005',
  dataPoints: [
    { date: '2023-07-20', value: 5.8, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-08-25', value: 5.9, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-10-15', value: 6.0, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-11-20', value: 6.1, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-12-18', value: 6.1, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2024-01-15', value: 6.2, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } }
  ] as TrendDataPoint[],
  overallTrend: 'increasing',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

export const albertoHba1cTrendData: TrendData = {
  biomarkerId: 'hba1c',
  patientId: 'patient-006',
  dataPoints: [
    { date: '2023-07-20', value: 5.8, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-08-25', value: 5.9, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-10-15', value: 6.0, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-11-20', value: 6.1, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-12-18', value: 6.1, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2024-01-15', value: 6.2, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } }
  ] as TrendDataPoint[],
  overallTrend: 'increasing',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

export const albertoGlucoseTrendData: TrendData = {
  biomarkerId: 'glucose',
  patientId: 'patient-006',
  dataPoints: [
    { date: '2023-07-20', value: 88, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-08-25', value: 85, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-10-15', value: 82, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-11-20', value: 86, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2023-12-18', value: 84, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } },
    { date: '2024-01-15', value: 85, status: 'normal', referenceRange: { min: 70, max: 99, unit: 'mg/dL' } }
  ] as TrendDataPoint[],
  overallTrend: 'stable',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

export const robertDwayneHba1cTrendData: TrendData = {
  biomarkerId: 'hba1c',
  patientId: 'patient-007',
  dataPoints: [
    { date: '2023-07-20', value: 5.8, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-08-25', value: 5.9, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-10-15', value: 6.0, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-11-20', value: 6.1, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2023-12-18', value: 4.4, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2024-01-15', value: 4.7, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2024-02-15', value: 5.9, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2024-03-15', value: 6.2, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2024-04-15', value: 6.0, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
    { date: '2024-05-15', value: 5.9, status: 'elevated', referenceRange: { min: 4.0, max: 5.6, unit: '%' } },
  ] as TrendDataPoint[],
  overallTrend: 'increasing',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

export const samanthaBpTrendData: TrendData = {
  biomarkerId: 'systolic_bp',
  patientId: 'patient-008',
  dataPoints: [
    { date: '2023-07-20', value: 155, status: 'high', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-08-25', value: 148, status: 'high', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-10-15', value: 145, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-11-20', value: 142, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-12-18', value: 138, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-01-15', value: 139, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-02-15', value: 149, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-03-15', value: 150, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-04-15', value: 122, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-05-15', value: 133, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-06-15', value: 130, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-07-15', value: 166, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-08-15', value: 188, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-09-15', value: 122, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-10-15', value: 133, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-11-15', value: 130, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-12-15', value: 166, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-01-15', value: 188, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-02-15', value: 122, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-03-15', value: 128, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-04-15', value: 129, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-05-15', value: 120, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-06-15', value: 149, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-07-15', value: 141, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-08-15', value: 120, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2025-09-15', value: 128, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
  ] as TrendDataPoint[],
  overallTrend: 'decreasing',
  startDate: '2023-07-20',
  endDate: '2026-07-15'
};

export const johnBpTrendData: TrendData = {
  biomarkerId: 'systolic_bp',
  patientId: 'patient-009',
  dataPoints: [
    { date: '2023-07-20', value: 155, status: 'high', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-08-25', value: 148, status: 'high', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-10-15', value: 145, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-11-20', value: 142, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2023-12-18', value: 138, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } },
    { date: '2024-01-15', value: 142, status: 'elevated', referenceRange: { min: 90, max: 120, unit: 'mmHg' } }
  ] as TrendDataPoint[],
  overallTrend: 'decreasing',
  startDate: '2023-07-20',
  endDate: '2024-01-15'
};

// Export all trend data for easy access
export const allTrendData = {
    sarah: hba1cTrendData,
    david: davidBpTrendData,
    maria: mariaCholesterolTrendData,
    james: jamesGlucoseTrendData,
    linda: lindaHba1cTrendData,
    alberto: albertoHba1cTrendData,
    robert: robertDwayneHba1cTrendData,
    samantha: samanthaBpTrendData,
    john: johnBpTrendData
};