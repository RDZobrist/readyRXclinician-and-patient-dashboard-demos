import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Healthcare UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Badge Component

Status indicators for lab results and medical alerts in healthcare applications.

## Features
- **Healthcare Status Variants**: Normal, High, Low, Critical, Warning, Elevated
- **Accessibility**: Full ARIA support with status descriptions for screen readers
- **Visual Indicators**: Color-coded with semantic meaning
- **Responsive**: Works across all device sizes

## Medical Status Meanings
- **Normal**: Within healthy reference ranges
- **High/Low**: Outside normal range, may require attention
- **Critical**: Requires immediate medical attention
- **Warning**: Borderline values, monitor closely
- **Elevated**: Slightly above normal range
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'high', 'low', 'critical', 'warning', 'elevated', 'primary', 'secondary'],
      description: 'Badge variant/status type',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
    },
    pulse: {
      control: 'boolean',
      description: 'Animated pulse effect for urgent statuses',
    },
    children: {
      control: 'text',
      description: 'Badge content/text',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default badge
export const Default: Story = {
  args: {
    variant: 'normal',
    children: 'Normal',
  },
};

// Healthcare status variants
export const HealthcareStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="normal">Normal</Badge>
      <Badge variant="high">High</Badge>
      <Badge variant="low">Low</Badge>
      <Badge variant="critical">Critical</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="elevated">Elevated</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All healthcare-themed status variants with their semantic colors and meanings.',
      },
    },
  },
};

// Lab result examples
export const LabResultExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '120px', fontWeight: '500' }}>Glucose:</span>
        <Badge variant="normal">95 mg/dL</Badge>
        <span style={{ color: '#6b7280', fontSize: '14px' }}>Within normal range</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '120px', fontWeight: '500' }}>Blood Pressure:</span>
        <Badge variant="elevated">145/90</Badge>
        <span style={{ color: '#6b7280', fontSize: '14px' }}>Slightly elevated</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '120px', fontWeight: '500' }}>Cholesterol:</span>
        <Badge variant="high">240 mg/dL</Badge>
        <span style={{ color: '#6b7280', fontSize: '14px' }}>Above normal range</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '120px', fontWeight: '500' }}>Hemoglobin:</span>
        <Badge variant="critical" pulse>6.2 g/dL</Badge>
        <span style={{ color: '#6b7280', fontSize: '14px' }}>Critically low - needs immediate attention</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of badges used in lab result displays with medical context.',
      },
    },
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Badge size="sm" variant="normal">Small</Badge>
      <Badge size="md" variant="normal">Medium</Badge>
      <Badge size="lg" variant="normal">Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge size variants for different use cases.',
      },
    },
  },
};

// Critical with pulse
export const CriticalAlert: Story = {
  args: {
    variant: 'critical',
    pulse: true,
    children: 'Critical',
  },
  parameters: {
    docs: {
      description: {
        story: 'Critical status badge with pulse animation for urgent medical alerts.',
      },
    },
  },
};

// Accessibility demonstration
export const AccessibilityFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4 style={{ marginBottom: '8px' }}>Screen Reader Descriptions</h4>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
          Each badge includes descriptive ARIA labels for screen readers:
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Badge variant="normal">Normal</Badge>
          <Badge variant="critical">Critical</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
        <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px' }}>
          Try using a screen reader to hear the full status descriptions.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels and screen reader support.',
      },
    },
  },
};
