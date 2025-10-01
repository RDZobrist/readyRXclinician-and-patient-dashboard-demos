import type { Meta, StoryObj } from '@storybook/react';
import { DashboardContent } from '../components/dashboard/DashboardContent/DashboardContent';
import { PatientProvider } from '../contexts/PatientContext';
import { ViewProvider } from '../contexts/ViewContext';

const meta = {
  title: 'Healthcare Dashboard/Complete Dashboard',
  component: DashboardContent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Ready RX Healthcare Dashboard

Complete healthcare dashboard application for patient health monitoring and lab results management.

## Key Features

### 🏥 **Healthcare-Focused Design**
- Patient vs Clinician view modes
- Medical terminology tooltips and explanations
- Lab result displays with reference ranges
- Biomarker trend analysis and visualization
- AI-powered health suggestions with proper disclaimers

### 📊 **Data Visualization**
- Interactive trend charts with Recharts
- Sortable, accessible data tables
- Real-time patient health summaries
- Mobile-responsive lab result views

### ♿ **Accessibility Excellence**
- WCAG 2.1 AA compliance
- Full keyboard navigation support
- Screen reader optimized with comprehensive ARIA labels
- High contrast and reduced motion support
- Healthcare-specific accessibility features

### 🎨 **Component Library**
- 8+ reusable UI components
- Consistent design system
- TypeScript interfaces for type safety
- CSS modules for scoped styling
- Comprehensive Storybook documentation

### 🔒 **Healthcare Compliance**
- AI disclaimer banners for transparency
- Patient data privacy controls
- Role-based access (Patient vs Clinician views)
- Medical terminology education
- Professional healthcare UX patterns

## Architecture

### **State Management**
- React Context API for patient selection
- Custom hooks for view management
- Centralized patient data synchronization

### **Data Layer**
- Realistic mock healthcare data
- Multi-date lab results for trend analysis
- Patient demographics and medical history
- Biomarker reference ranges and status indicators

### **Accessibility**
- Screen reader utilities (sr-only classes)
- Focus management and keyboard navigation
- Medical status descriptions for assistive technology
- Proper ARIA relationships and live regions
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ViewProvider>
        <PatientProvider>
          <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
            <Story />
          </div>
        </PatientProvider>
      </ViewProvider>
    ),
  ],
} satisfies Meta<typeof DashboardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Complete dashboard - Patient View
export const PatientView: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**Patient View** - Simplified interface for patients to view their own health data.

**Features:**
- Personal health summary with biomarker cards
- Lab results table with patient-friendly language
- Trend charts showing health progress over time
- AI-powered health suggestions with disclaimers
- Medical terminology tooltips for education

**Privacy:** Patients can only see their own data, ensuring healthcare privacy compliance.
        `,
      },
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Complete dashboard - Clinician View
export const ClinicianView: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**Clinician View** - Professional interface for healthcare providers managing multiple patients.

**Features:**
- Patient selector in header for switching between patients
- Comprehensive lab results with reference ranges
- Technical biomarker details and medical terminology
- Advanced trend analysis with reference lines
- Clinical decision support through AI suggestions

**Workflow:** Optimized for healthcare professional workflows with quick patient switching and detailed medical data.
        `,
      },
    },
    viewport: {
      defaultViewport: 'clinicianWorkstation',
    },
  },
};

// Mobile responsive view
export const MobileView: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**Mobile View** - Fully responsive design optimized for mobile devices and tablets.

**Features:**
- Touch-friendly interface with 44px minimum touch targets
- Collapsible mobile lab results view
- Swipe-friendly navigation
- Optimized typography and spacing for small screens
- Accessible mobile interactions

**Use Cases:** Perfect for patients checking results on-the-go or clinicians using tablets during patient visits.
        `,
      },
    },
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

// Accessibility demonstration
export const AccessibilityShowcase: Story = {
  render: () => (
    <div>
      <div style={{ 
        padding: '16px', 
        backgroundColor: '#1e40af', 
        color: 'white',
        marginBottom: '16px'
      }}>
        <h2 style={{ margin: '0 0 8px 0' }}>♿ Accessibility Features</h2>
        <p style={{ margin: 0, fontSize: '14px' }}>
          This dashboard meets WCAG 2.1 AA standards. Try keyboard navigation (Tab, Enter, Space, Escape) 
          and screen reader testing to experience the full accessibility implementation.
        </p>
      </div>
      <DashboardContent />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Accessibility Showcase** - Demonstrates comprehensive accessibility features.

**WCAG 2.1 AA Compliance:**
- ✅ Keyboard navigation for all interactive elements
- ✅ Screen reader support with descriptive ARIA labels
- ✅ Color contrast ratios meeting accessibility standards
- ✅ Focus management and visual focus indicators
- ✅ Medical terminology explanations for assistive technology

**Healthcare-Specific Accessibility:**
- Medical status descriptions for screen readers
- Biomarker explanations and educational tooltips
- Proper error handling and status announcements
- Healthcare workflow-optimized navigation patterns
        `,
      },
    },
  },
};

// Component library showcase
export const ComponentLibraryShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2>Ready RX Component Library</h2>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>
          Reusable healthcare UI components with comprehensive documentation and accessibility features.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Base UI Components</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
              <li>Badge - Healthcare status indicators</li>
              <li>Table - Sortable, accessible data tables</li>
              <li>Tooltip - Educational medical tooltips</li>
              <li>Loading - Professional loading states</li>
              <li>ErrorBoundary - Graceful error handling</li>
            </ul>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Dashboard Components</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
              <li>PatientHeader - Patient demographics</li>
              <li>PatientSummary - Health overview cards</li>
              <li>LabResultsTable - Lab data display</li>
              <li>TrendChart - Biomarker visualization</li>
              <li>HealthSuggestions - AI recommendations</li>
            </ul>
          </div>
          
          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Healthcare Features</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
              <li>Medical terminology tooltips</li>
              <li>AI disclaimer banners</li>
              <li>Patient vs Clinician views</li>
              <li>Biomarker reference ranges</li>
              <li>Healthcare accessibility compliance</li>
            </ul>
          </div>
        </div>
      </div>
      
      <DashboardContent />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Component Library Overview** - Complete healthcare component library with 8+ reusable components.

**Architecture Benefits:**
- **Reusability**: Components designed for multiple healthcare use cases
- **Consistency**: Unified design system across all components
- **Accessibility**: WCAG 2.1 AA compliance built into every component
- **Type Safety**: Full TypeScript interfaces and type checking
- **Documentation**: Comprehensive Storybook stories with examples

**Healthcare Focus:**
- Medical terminology and biomarker explanations
- Patient privacy and role-based access controls
- AI transparency and healthcare compliance
- Professional healthcare UX patterns and workflows
        `,
      },
    },
  },
};
