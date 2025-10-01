import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Badge } from "../Badge/Badge";
import { TableSkeletonLoader } from "../Loading/Loading";

// Mock healthcare data
const mockLabResults = [
  {
    id: "1",
    testName: "Glucose",
    value: 95,
    unit: "mg/dL",
    referenceRange: "70-100 mg/dL",
    status: "normal" as const,
    date: "2024-01-15",
  },
  {
    id: "2",
    testName: "HbA1c",
    value: 6.8,
    unit: "%",
    referenceRange: "<7.0%",
    status: "elevated" as const,
    date: "2024-01-15",
  },
  {
    id: "3",
    testName: "Total Cholesterol",
    value: 245,
    unit: "mg/dL",
    referenceRange: "<200 mg/dL",
    status: "high" as const,
    date: "2024-01-15",
  },
  {
    id: "4",
    testName: "HDL Cholesterol",
    value: 38,
    unit: "mg/dL",
    referenceRange: ">40 mg/dL",
    status: "low" as const,
    date: "2024-01-15",
  },
];

const columns = [
  {
    key: "testName",
    header: "Test Name",
    sortable: true,
  },
  {
    key: "value",
    header: "Result",
    sortable: true,
    accessor: (item: any) => `${item.value} ${item.unit}`,
  },
  {
    key: "referenceRange",
    header: "Reference Range",
    accessor: (item: any) => item.referenceRange,
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    accessor: (item: any) => <Badge variant={item.status}>{item.status}</Badge>,
  },
  {
    key: "date",
    header: "Date",
    sortable: true,
  },
];

const meta = {
  title: "Healthcare UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
# Table Component

Accessible, sortable data table for healthcare applications with lab results and medical data.

## Features
- **Sortable Columns**: Click headers to sort data ascending/descending
- **Accessibility**: Full WCAG 2.1 AA compliance with ARIA labels and keyboard navigation (https://www.w3.org/TR/WCAG21/)
- **Loading States**: Built-in loading and error state handling
- **Healthcare Optimized**: Designed for medical data display
- **Responsive**: Adapts to different screen sizes

## Accessibility Features
- **Keyboard Navigation**: Press Tab to navigate through sortable headers; Press Enter or Space to sort
- **Screen Reader Support**: Comprehensive ARIA labels and descriptions
- **Sort State Communication**: Screen readers announce current sort direction
- **Error Handling**: Proper error announcements with role="alert"
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      description:
        "Array of column definitions with keys, headers, and optional accessors",
    },
    data: {
      description: "Array of data objects to display in the table",
    },
    isLoading: {
      control: "boolean",
      description: "Show loading state",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    caption: {
      control: "text",
      description: "Table caption for accessibility",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default table with lab results
export const Default: Story = {
  args: {
    columns,
    data: mockLabResults,
    caption: "Lab Results - January 15, 2024",
  },
};

// Loading state
// Loading state
export const Loading: Story = {
    render: () => (
      <div>
        <Table
          columns={columns}
          data={[]}
          isLoading={true}
          caption="Loading lab results..."
        />
      </div>
    ),
    parameters: {
      docs: {
        description: {
          story:
            "Table in loading state using the built-in TableSkeletonLoader.",
        },
      },
    },
  };

// Error state
export const Error: Story = {
  args: {
    columns,
    data: [],
    error: "Failed to load lab results. Please try again.",
    caption: "Lab Results",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table error state with error message and proper ARIA alert role.",
      },
    },
  },
};

// Empty state
export const Empty: Story = {
  args: {
    columns,
    data: [],
    caption: "No lab results available",
  },
  parameters: {
    docs: {
      description: {
        story: "Table with no data showing empty state message.",
      },
    },
  },
};

// Large dataset for sorting demonstration
export const SortableData: Story = {
  args: {
    columns,
    data: [
      ...mockLabResults,
      {
        id: "5",
        testName: "Blood Pressure (Systolic)",
        value: 145,
        unit: "mmHg",
        referenceRange: "<120 mmHg",
        status: "elevated" as const,
        date: "2024-01-15",
      },
      {
        id: "6",
        testName: "Blood Pressure (Diastolic)",
        value: 92,
        unit: "mmHg",
        referenceRange: "<80 mmHg",
        status: "high" as const,
        date: "2024-01-15",
      },
      {
        id: "7",
        testName: "Creatinine",
        value: 1.2,
        unit: "mg/dL",
        referenceRange: "0.6-1.3 mg/dL",
        status: "normal" as const,
        date: "2024-01-15",
      },
      {
        id: "8",
        testName: "Hemoglobin",
        value: 11.8,
        unit: "g/dL",
        referenceRange: "12.0-15.5 g/dL",
        status: "low" as const,
        date: "2024-01-15",
      },
    ],
    caption: "Complete Lab Panel - January 15, 2024",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with multiple lab results demonstrating sorting functionality. Click column headers to sort.",
      },
    },
  },
};

// Accessibility demonstration
export const AccessibilityFeatures: Story = {
  render: () => (
    <div>
      <div
        style={{
          marginBottom: "16px",
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
          <li>Use Tab key to navigate between sortable column headers</li>
          <li>Press Enter or Space to sort by a column</li>
          <li>
            Screen readers announce sort direction and column descriptions
          </li>
          <li>Table caption provides context for screen reader users</li>
        </ul>
      </div>
      <Table
        columns={columns}
        data={mockLabResults}
        caption="Accessible Lab Results Table - Use keyboard navigation to explore"
      />
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
