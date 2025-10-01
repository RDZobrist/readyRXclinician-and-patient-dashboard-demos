import type { Meta, StoryObj } from '@storybook/react';
import { TrendChart } from './TrendChart';
import { PatientProvider } from '@/contexts/PatientContext';
import type { TrendData, Patient } from '@/types';

// Mock patient data
const mockPatient: Patient = {
  id: 'patient-001',
  name: 'Sarah Mitchell',
  age: 45,
  gender: 'Female',
  conditions: ['Type 2 Diabetes', 'Hypertension'],
  demographics: {
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    phone: '555-1234',
    email: 'sarah.mitchell@example.com',
    emergencyContact: {
      name: 'John Doe',
      phone: '555-5678',
      relationship: 'Spouse'
    },
    insuranceInfo: {
      policyNumber: '123456789',
      groupNumber: '987654321',
      effectiveDate: '2023-01-01',
      expirationDate: '2024-12-31'
    },
    preferences: {
      communicationMethod: 'email',
      language: 'English',
      timezone: 'America/New_York',
      notifications: {
        labResults: true,
        appointments: true,
        medications: true
      }
    },
    alerts: []
  }
};

// Mock trend data for stories
const mockHbA1cTrend: TrendData = {
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
    }
  ],
  overallTrend: 'increasing',
  timeRange: '6 months'
};

const mockBloodPressureTrend: TrendData = {
  biomarkerId: 'systolic_bp',
  patientId: 'patient-002',
  dataPoints: [
    {
      date: '2023-07-20',
      value: 145,
      status: 'elevated',
      referenceRange: { min: 90, max: 120, unit: ' mmHg' }
    },
    {
      date: '2023-08-25',
      value: 142,
      status: 'elevated',
      referenceRange: { min: 90, max: 120, unit: ' mmHg' }
    },
    {
      date: '2023-10-15',
      value: 138,
      status: 'elevated',
      referenceRange: { min: 90, max: 120, unit: ' mmHg' }
    },
    {
      date: '2023-11-20',
      value: 135,
      status: 'elevated',
      referenceRange: { min: 90, max: 120, unit: ' mmHg' }
    },
    {
      date: '2023-12-18',
      value: 128,
      status: 'elevated',
      referenceRange: { min: 90, max: 120, unit: ' mmHg' }
    },
    {
      date: '2024-01-15',
      value: 125,
      status: 'elevated',
      referenceRange: { min: 90, max: 120, unit: ' mmHg' }
    }
  ],
  overallTrend: 'decreasing',
  timeRange: '6 months'
};

const mockCholesterolTrend: TrendData = {
  biomarkerId: 'total_cholesterol',
  patientId: 'patient-003',
  dataPoints: [
    {
      date: '2023-07-20',
      value: 245,
      status: 'high',
      referenceRange: { min: 100, max: 200, unit: ' mg/dL' }
    },
    {
      date: '2023-08-25',
      value: 240,
      status: 'high',
      referenceRange: { min: 100, max: 200, unit: ' mg/dL' }
    },
    {
      date: '2023-10-15',
      value: 235,
      status: 'high',
      referenceRange: { min: 100, max: 200, unit: ' mg/dL' }
    },
    {
      date: '2023-11-20',
      value: 225,
      status: 'high',
      referenceRange: { min: 100, max: 200, unit: ' mg/dL' }
    },
    {
      date: '2023-12-18',
      value: 210,
      status: 'elevated',
      referenceRange: { min: 100, max: 200, unit: ' mg/dL' }
    },
    {
      date: '2024-01-15',
      value: 195,
      status: 'normal',
      referenceRange: { min: 100, max: 200, unit: ' mg/dL' }
    }
  ],
  overallTrend: 'decreasing',
  timeRange: '6 months'
};

const mockGlucoseTrend: TrendData = {
  biomarkerId: 'glucose',
  patientId: 'patient-004',
  dataPoints: [
    {
      date: '2023-07-20',
      value: 95,
      status: 'normal',
      referenceRange: { min: 70, max: 100, unit: ' mg/dL' }
    },
    {
      date: '2023-08-25',
      value: 92,
      status: 'normal',
      referenceRange: { min: 70, max: 100, unit: ' mg/dL' }
    },
    {
      date: '2023-10-15',
      value: 98,
      status: 'normal',
      referenceRange: { min: 70, max: 100, unit: ' mg/dL' }
    },
    {
      date: '2023-11-20',
      value: 94,
      status: 'normal',
      referenceRange: { min: 70, max: 100, unit: ' mg/dL' }
    },
    {
      date: '2023-12-18',
      value: 96,
      status: 'normal',
      referenceRange: { min: 70, max: 100, unit: ' mg/dL' }
    },
    {
      date: '2024-01-15',
      value: 93,
      status: 'normal',
      referenceRange: { min: 70, max: 100, unit: ' mg/dL' }
    }
  ],
  overallTrend: 'stable',
  timeRange: '6 months'
};

const meta = {
  title: 'Healthcare UI/TrendChart',
  component: TrendChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# TrendChart Component

Interactive line chart for visualizing biomarker trends over time in healthcare applications.

## Features
- **Biomarker Visualization**: Display trends for HbA1c, blood pressure, cholesterol, glucose, and more
- **Reference Ranges**: Visual indicators for normal, elevated, and critical values
- **Interactive Tooltips**: Detailed information on hover with medical context
- **Trend Indicators**: Visual arrows showing increasing, decreasing, or stable trends
- **Responsive Design**: Adapts to different screen sizes and containers
- **Healthcare Optimized**: Color coding based on clinical significance

## Medical Context
- **Green**: Normal values within reference range
- **Orange**: Elevated/warning values requiring monitoring
- **Red**: High/critical values requiring immediate attention
- **Reference Lines**: Dashed lines showing normal range boundaries

## Accessibility
- Proper color contrast for all status indicators
- Keyboard navigation support
- Screen reader compatible tooltips and labels
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'number', min: 200, max: 800, step: 50 },
      description: 'Chart height in pixels',
    },
    showGrid: {
      control: 'boolean',
      description: 'Show grid lines on chart',
    },
    showLegend: {
      control: 'boolean',
      description: 'Show chart legend',
    },
    showReferenceLines: {
      control: 'boolean',
      description: 'Show reference range lines',
    },
    data: {
      description: 'Trend data to display (overrides patient context)',
    },
  },
  decorators: [
    (Story) => (
      <PatientProvider initialPatient={mockPatient}>
        <Story />
      </PatientProvider>
    ),
  ],
} satisfies Meta<typeof TrendChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// HbA1c trend showing increasing diabetes risk
export const HbA1cTrend: Story = {
  args: {
    data: mockHbA1cTrend,
    height: 400,
    showGrid: true,
    showLegend: true,
    showReferenceLines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'HbA1c trend chart showing increasing diabetes risk over 6 months. Values above 7.0% indicate poor diabetes control.',
      },
    },
  },
};

// Blood pressure trend showing improvement
export const BloodPressureTrend: Story = {
  args: {
    data: mockBloodPressureTrend,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story: 'Systolic blood pressure trend showing improvement over time. Decreasing trend indicates effective treatment.',
      },
    },
  },
};

// Cholesterol trend showing successful treatment
export const CholesterolTrend: Story = {
  args: {
    data: mockCholesterolTrend,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story: 'Total cholesterol trend showing successful reduction from high to normal levels through treatment.',
      },
    },
  },
};

// Glucose trend showing stable control
export const GlucoseTrend: Story = {
  args: {
    data: mockGlucoseTrend,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story: 'Fasting glucose trend showing stable, well-controlled levels within normal range.',
      },
    },
  },
};

// Compact chart for dashboard widgets
export const CompactChart: Story = {
  args: {
    data: mockHbA1cTrend,
    height: 250,
    showGrid: false,
    showLegend: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version suitable for dashboard widgets or smaller containers.',
      },
    },
  },
};

// Chart without reference lines
export const NoReferenceLines: Story = {
  args: {
    data: mockBloodPressureTrend,
    height: 400,
    showReferenceLines: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chart without reference range lines for cleaner visualization when ranges are not critical.',
      },
    },
  },
};

// Large chart for detailed analysis
export const DetailedAnalysis: Story = {
  args: {
    data: mockCholesterolTrend,
    height: 600,
    showGrid: true,
    showLegend: true,
    showReferenceLines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large chart format for detailed trend analysis with all visual aids enabled.',
      },
    },
  },
};

// Chart comparison demonstration
export const ChartComparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '16px', color: '#374151' }}>Concerning Trend</h4>
        <TrendChart
          data={mockHbA1cTrend}
          height={300}
          showGrid={true}
          showReferenceLines={true}
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', color: '#374151' }}>Improving Trend</h4>
        <TrendChart
          data={mockCholesterolTrend}
          height={300}
          showGrid={true}
          showReferenceLines={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison showing a concerning upward trend vs. an improving downward trend.',
      },
    },
  },
};
