import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Badge } from '../Badge';
import { Button } from '../Button';

const meta = {
  title: 'Base UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Card Component

A flexible container component for healthcare applications with support for headers, footers, and interactive states.

## Features
- **Multiple Variants**: Primary, secondary, critical, warning, normal, and role-based variants
- **Interactive States**: Clickable cards with proper accessibility
- **Elevation**: Optional shadow elevation for visual hierarchy
- **Flexible Layout**: Support for headers, content, and footers
- **Healthcare Context**: Optimized for medical data presentation

## Use Cases
- Patient information cards
- Lab result containers
- Dashboard widgets
- Interactive navigation elements
- Medical alert displays
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'critical', 'warning', 'normal', 'clinician', 'admin', 'patient'],
      description: 'Visual variant of the card',
    },
    elevated: {
      control: 'boolean',
      description: 'Add shadow elevation to the card',
    },
    interactive: {
      control: 'boolean',
      description: 'Add hover effects for interactive cards',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler - makes card interactive',
    },
    header: {
      control: 'text',
      description: 'Header content for the card',
    },
    footer: {
      control: 'text',
      description: 'Footer content for the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default card
export const Default: Story = {
  args: {
    children: 'This is a basic card with default styling.',
  },
};

// Card variants
export const Variants: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      <Card variant="primary">
        <h4 style={{ margin: '0 0 8px 0' }}>Primary Card</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          Standard card for general content
        </p>
      </Card>
      
      <Card variant="secondary">
        <h4 style={{ margin: '0 0 8px 0' }}>Secondary Card</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          Subtle styling for supporting content
        </p>
      </Card>
      
      <Card variant="critical">
        <h4 style={{ margin: '0 0 8px 0' }}>Critical Alert</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>
          High priority medical alerts
        </p>
      </Card>
      
      <Card variant="warning">
        <h4 style={{ margin: '0 0 8px 0' }}>Warning Notice</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Important medical information
        </p>
      </Card>
      
      <Card variant="normal">
        <h4 style={{ margin: '0 0 8px 0' }}>Normal Status</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Healthy status indicators
        </p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants for various healthcare contexts and urgency levels.',
      },
    },
  },
};

// Role-based variants
export const RoleBasedVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      <Card variant="clinician">
        <h4 style={{ margin: '0 0 8px 0' }}>Clinician Dashboard</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          Healthcare provider interface
        </p>
      </Card>
      
      <Card variant="admin">
        <h4 style={{ margin: '0 0 8px 0' }}>Admin Panel</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          Administrative controls
        </p>
      </Card>
      
      <Card variant="patient">
        <h4 style={{ margin: '0 0 8px 0' }}>Patient Portal</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          Patient-facing information
        </p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Role-based card variants for different user types in healthcare applications.',
      },
    },
  },
};

// Card with header and footer
export const WithHeaderAndFooter: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>Patient Summary</h3>
        <Badge variant="normal">Active</Badge>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>Last updated: 2 hours ago</span>
        <Button size="sm" variant="primary">View Details</Button>
      </div>
    ),
    children: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>
          <strong>Sarah Mitchell</strong> • Age 45 • Female
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '14px' }}>
          <div>Blood Pressure: 120/80</div>
          <div>Heart Rate: 72 bpm</div>
          <div>Temperature: 98.6°F</div>
          <div>Weight: 145 lbs</div>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with structured header and footer sections for complex healthcare data.',
      },
    },
  },
};

// Interactive cards
export const InteractiveCards: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
      <Card 
        interactive 
        onClick={() => alert('Navigating to lab results')}
        header="Lab Results"
      >
        <p style={{ margin: '0 0 8px 0' }}>Latest blood work available</p>
        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
          Click to view detailed results
        </p>
      </Card>
      
      <Card 
        interactive 
        elevated
        onClick={() => alert('Opening appointment scheduler')}
        header="Schedule Appointment"
      >
        <p style={{ margin: '0 0 8px 0' }}>Book your next visit</p>
        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
          Available slots this week
        </p>
      </Card>
      
      <Card 
        interactive 
        variant="critical"
        onClick={() => alert('Viewing critical alert')}
        header="⚠️ Urgent Alert"
      >
        <p style={{ margin: '0 0 8px 0' }}>Blood pressure reading requires attention</p>
        <p style={{ margin: 0, fontSize: '12px' }}>
          Click for immediate action items
        </p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards with click handlers, hover effects, and keyboard accessibility.',
      },
    },
  },
};

// Lab result card example
export const LabResultCard: Story = {
  args: {
    variant: 'primary',
    elevated: true,
    header: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0 }}>Glucose</h4>
        <Badge variant="normal">Normal</Badge>
      </div>
    ),
    children: (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>95</span>
          <span style={{ fontSize: '14px', color: '#6b7280' }}>mg/dL</span>
        </div>
        <div style={{ fontSize: '12px', color: '#6b7280' }}>
          Reference: 70-99 mg/dL
        </div>
      </div>
    ),
    footer: (
      <div style={{ fontSize: '12px', color: '#6b7280' }}>
        Tested: Oct 1, 2024 • 9:30 AM
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of a lab result card with medical data presentation.',
      },
    },
  },
};

// Elevation and states
export const ElevationAndStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      <Card>
        <h4 style={{ margin: '0 0 8px 0' }}>Flat Card</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          No elevation
        </p>
      </Card>
      
      <Card elevated>
        <h4 style={{ margin: '0 0 8px 0' }}>Elevated Card</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          With shadow
        </p>
      </Card>
      
      <Card interactive>
        <h4 style={{ margin: '0 0 8px 0' }}>Interactive Card</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          Hover effects
        </p>
      </Card>
      
      <Card elevated interactive onClick={() => alert('Clicked!')}>
        <h4 style={{ margin: '0 0 8px 0' }}>Clickable Card</h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
          Elevated + Interactive
        </p>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different elevation and interaction states for visual hierarchy and user feedback.',
      },
    },
  },
};

// Accessibility demonstration
export const AccessibilityFeatures: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ padding: '12px', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#1e40af' }}>Accessibility Features</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#1e40af' }}>
          <li>Keyboard navigation with Tab, Enter, and Space keys</li>
          <li>Proper ARIA roles and labels for interactive cards</li>
          <li>Focus management and visual focus indicators</li>
          <li>Screen reader compatible content structure</li>
        </ul>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Card onClick={() => alert('Keyboard accessible!')}>
          <h4 style={{ margin: '0 0 8px 0' }}>Keyboard Accessible</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
            Try tabbing to this card and pressing Enter or Space
          </p>
        </Card>
        
        <Card variant="critical" onClick={() => alert('Screen reader friendly!')}>
          <h4 style={{ margin: '0 0 8px 0' }}>Screen Reader Friendly</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Proper semantic structure and ARIA labels
          </p>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features including keyboard navigation and screen reader support.',
      },
    },
  },
};
