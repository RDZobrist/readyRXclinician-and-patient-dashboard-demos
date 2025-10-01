import type { Meta, StoryObj } from "@storybook/react";
import { MedicalTooltip } from "./MedicalTooltip";

const meta = {
  title: "Healthcare UI/MedicalTooltip",
  component: MedicalTooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# MedicalTooltip Component

Educational tooltips for medical terminology and biomarker explanations in healthcare applications.

## Features
- **Medical Definitions**: Comprehensive library of healthcare terminology
- **Educational Focus**: Helps patients and clinicians understand medical terms
- **Accessibility**: Full WCAG 2.1 AA compliance with proper ARIA relationships
- **Visual Indicators**: Clear styling to indicate interactive medical terms
- **Multiple Triggers**: Hover, click, or focus activation

## Medical Terms Included
- **Biomarkers**: HbA1c, Glucose, Cholesterol, Blood Pressure
- **Lab Tests**: Complete Blood Count, Metabolic Panel, Lipid Panel
- **Conditions**: Diabetes, Hypertension, Hyperlipidemia
- **Measurements**: BMI, eGFR, and more

## Use Cases
- Patient education in lab result displays
- Clinician reference for complex terminology
- Medical record explanations
- Healthcare dashboard contextual help
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    term: {
      control: "select",
      options: [
        "hba1c",
        "glucose",
        "cholesterol",
        "blood-pressure",
        "bmi",
        "diabetes",
        "hypertension",
      ],
      description: "Medical term to display definition for",
    },
    trigger: {
      control: "select",
      options: ["hover", "click", "focus"],
      description: "How the tooltip is triggered",
    },
    showIcon: {
      control: "boolean",
      description: "Show information icon when no children provided",
    },
    children: {
      control: "text",
      description: "Content to wrap with tooltip (medical term text)",
    },
  },
} satisfies Meta<typeof MedicalTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default medical tooltip
export const Default: Story = {
  args: {
    term: "hba1c",
    children: "HbA1c",
  },
};

// Biomarker explanations
export const BiomarkerExplanations: Story = {
  args: {
    term: "hba1c",
    children: "HbA1c",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: "600px",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "12px" }}>Lab Result Explanations</h4>
        <p style={{ lineHeight: "1.6" }}>
          Your <MedicalTooltip term="hba1c"><strong>HbA1c</strong></MedicalTooltip> level of 6.8%
          indicates good diabetes control. Your{" "}
          <MedicalTooltip term="glucose"><strong>fasting glucose</strong></MedicalTooltip> is
          within normal range at 95 mg/dL. However, your{" "}
          <MedicalTooltip term="cholesterol"><strong>total cholesterol</strong></MedicalTooltip>{" "}
          at 245 mg/dL is elevated and may require dietary changes or
          medication.
        </p>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>Vital Signs Context</h4>
        <p style={{ lineHeight: "1.6" }}>
          Your{" "}
          <MedicalTooltip term="blood-pressure"><strong>blood pressure</strong></MedicalTooltip>{" "}
          reading of 145/92 mmHg indicates{" "}
          <MedicalTooltip term="hypertension"><strong>hypertension</strong></MedicalTooltip>.
          Combined with your
          <MedicalTooltip term="bmi"><strong>BMI</strong></MedicalTooltip> of 28.5, this suggests
          increased cardiovascular risk.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world example of medical tooltips used in patient education and lab result explanations.",
      },
    },
  },
};

// Different trigger methods
export const TriggerMethods: Story = {
    args: {
        term: "diabetes",
        trigger: "hover",
    },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ minWidth: "80px", fontWeight: "500" }}>Hover:</span>
        <MedicalTooltip term="diabetes" trigger="hover">
          Diabetes
        </MedicalTooltip>
        <span style={{ fontSize: "14px", color: "#6b7280" }}>
          Hover to see definition
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ minWidth: "80px", fontWeight: "500" }}>Click:</span>
        <MedicalTooltip term="hypertension" trigger="click">
          Hypertension
        </MedicalTooltip>
        <span style={{ fontSize: "14px", color: "#6b7280" }}>
          Click to toggle definition
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ minWidth: "80px", fontWeight: "500" }}>Focus:</span>
        <MedicalTooltip term="cholesterol" trigger="focus">
          Cholesterol
        </MedicalTooltip>
        <span style={{ fontSize: "14px", color: "#6b7280" }}>
          Tab to focus and see definition
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different ways to trigger medical tooltips: hover, click, or keyboard focus.",
      },
    },
  },
};

// Icon-only tooltips
export const IconTooltips: Story = {
    args: {
        term: "diabetes",
        showIcon: true,
    },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontWeight: "500" }}>HbA1c: 6.8%</span>
        <MedicalTooltip term="hba1c" showIcon />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontWeight: "500" }}>Glucose: 95 mg/dL</span>
        <MedicalTooltip term="glucose" showIcon />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontWeight: "500" }}>Total Cholesterol: 245 mg/dL</span>
        <MedicalTooltip term="cholesterol" showIcon />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only tooltips for providing contextual medical information without wrapping text.",
      },
    },
  },
};

// Patient dashboard example
export const PatientDashboardExample: Story = {
    args: {
        term: "diabetes",
    },
  render: () => (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "16px" }}>
        Your Health Summary
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        <div
          style={{
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <MedicalTooltip term="diabetes">Diabetes Control</MedicalTooltip>
            <span
              style={{
                padding: "2px 8px",
                backgroundColor: "#dcfce7",
                color: "#166534",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              Good
            </span>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
            <MedicalTooltip term="hba1c">HbA1c</MedicalTooltip>: 6.8%
          </p>
        </div>

        <div
          style={{
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <MedicalTooltip term="hypertension">Blood Pressure</MedicalTooltip>
            <span
              style={{
                padding: "2px 8px",
                backgroundColor: "#fef3c7",
                color: "#92400e",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              Elevated
            </span>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
            145/92 mmHg
          </p>
        </div>

        <div
          style={{
            padding: "16px",
            backgroundColor: "white",
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <MedicalTooltip term="cholesterol">Cholesterol</MedicalTooltip>
            <span
              style={{
                padding: "2px 8px",
                backgroundColor: "#fee2e2",
                color: "#991b1b",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              High
            </span>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
            245 mg/dL
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete patient dashboard example showing how medical tooltips enhance understanding of health metrics.",
      },
    },
  },
};

// Accessibility demonstration
export const AccessibilityFeatures: Story = {
    args: {
        term: "diabetes",
    },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#f0f9ff",
          borderRadius: "6px",
        }}
      >
        <h4 style={{ margin: "0 0 8px 0", color: "#1e40af" }}>
          Accessibility Features
        </h4>
        <ul
          style={{
            margin: 0,
            paddingLeft: "20px",
            fontSize: "14px",
            color: "#1e40af",
          }}
        >
          <li>Proper ARIA relationships between triggers and tooltips</li>
          <li>Keyboard navigation with Tab, Enter, Space, and Escape keys</li>
          <li>Screen reader announcements of medical definitions</li>
          <li>Visual indicators for interactive medical terms</li>
        </ul>
      </div>

      <div>
        <p style={{ lineHeight: "1.6" }}>
          Try using keyboard navigation: Tab to{" "}
          <MedicalTooltip term="hba1c" trigger="focus">
            HbA1c
          </MedicalTooltip>
          , then to{" "}
          <MedicalTooltip term="glucose" trigger="focus">
            glucose
          </MedicalTooltip>
          , and finally to{" "}
          <MedicalTooltip term="cholesterol" trigger="focus">
            cholesterol
          </MedicalTooltip>
          . Press Enter or Space to activate click tooltips, Escape to close
          them.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of accessibility features including keyboard navigation and screen reader support.",
      },
    },
  },
};
