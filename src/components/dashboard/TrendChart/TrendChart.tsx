/**
 * TrendChart Component - Healthcare Dashboard
 * Line chart for biomarker trends over time with reference ranges
 * Now uses patient context to automatically display relevant trend data
 */

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";
import { format } from "date-fns";
import clsx from "clsx";
import { MedicalTooltip } from "@/components/baseUI/MedicalTooltip";
import { usePatient } from "@/hooks/usePatient";
import { allTrendData } from "@/data/mockTrendData";
import type { TrendData } from "@/types";
import styles from "./TrendChart.module.css";

export interface TrendChartProps {
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showReferenceLines?: boolean;
  className?: string;
  testId?: string;
  /** Optional: Override automatic patient selection */
  data?: TrendData;
}

// Map patient names to trend data keys
const patientTrendMap: Record<string, keyof typeof allTrendData> = {
  "Sarah Mitchell": "sarah",
  "David McDonald": "david",
  "Maria Rodriguez": "maria",
  "James Chen": "james",
  "Linda Johnson": "linda",
  "Samantha Reed": "samantha",
  "John Jimmerson": "john",
  "Alberto Dantesanderson": "alberto",
  "Robert Dwayne": "robert",
};
// Helper function to get medical term for tooltip
const getMedicalTermForBiomarker = (biomarkerId: string): string | null => {
  const termMap: Record<string, string> = {
    hba1c: "hba1c",
    systolic_bp: "blood-pressure",
    total_cholesterol: "cholesterol",
    glucose: "glucose",
  };
  return termMap[biomarkerId] || null;
};

export const TrendChart: React.FC<TrendChartProps> = ({
  height = 400,
  showGrid = true,
  showLegend = true,
  showReferenceLines = true,
  className,
  testId,
  data: overrideData,
}) => {
  const { selectedPatient } = usePatient();

  // Get trend data for selected patient or use override
  const getTrendData = (): TrendData | null => {
    if (overrideData) return overrideData;

    const trendKey = patientTrendMap[selectedPatient.name];
    if (trendKey && allTrendData[trendKey]) {
      return allTrendData[trendKey];
    }

    return null;
  };

  const data = getTrendData();

  // Show message if no trend data available for patient
  if (!data) {
    return (
      <div
        className={clsx(styles.trendChart, styles.noData, className)}
        data-testid={testId}
      >
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Trend Chart</h3>
        </div>
        <div className={styles.noDataMessage}>
          <p>No trend data available for {selectedPatient.name}</p>
          <p className={styles.noDataSubtext}>
            Trend data will appear here when biomarker history is available.
          </p>
        </div>
      </div>
    );
  }

  // Transform trend data for Recharts
  const chartData = data.dataPoints.map((point) => ({
    date: format(new Date(point.date), "MMM dd"),
    fullDate: point.date,
    value: point.value,
    status: point.status,
    referenceMin: point.referenceRange?.min,
    referenceMax: point.referenceRange?.max,
  }));

  // Get reference range for lines (use first data point)
  const referenceRange = data.dataPoints[0]?.referenceRange;
  const unit = referenceRange?.unit || "";

  // Determine line color based on overall trend and status
  const getLineColor = () => {
    const latestStatus = data.dataPoints[data.dataPoints.length - 1]?.status;
    switch (latestStatus) {
      case "critical":
      case "high":
      case "low":
        return "var(--color-critical, #dc2626)";
      case "warning":
      case "elevated":
        return "var(--color-warning, #d97706)";
      case "normal":
        return "var(--color-normal, #059669)";
      default:
        return "var(--color-primary, #2563eb)";
    }
  };

  // Get biomarker display name
  const getBiomarkerName = (biomarkerId: string) => {
    const nameMap: Record<string, string> = {
      hba1c: "HbA1c",
      systolic_bp: "Systolic Blood Pressure",
      total_cholesterol: "Total Cholesterol",
      glucose: "Glucose",
    };
    return nameMap[biomarkerId] || biomarkerId.toUpperCase();
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const medicalTerm = getMedicalTermForBiomarker(data.biomarkerId);
      
      return (
        <div className={styles.tooltip}>
          <p className={styles.tooltipLabel}>{`Date: ${label}`}</p>
          <p className={styles.tooltipValue}>
            <span className={styles.tooltipIndicator} style={{ backgroundColor: getLineColor() }} />
            {`Value: ${payload[0].value}${unit}`}
          </p>
          <p className={styles.tooltipStatus}>
            Status: <span className={clsx(styles.status, styles[data.status])}>{data.status}</span>
          </p>
          {referenceRange && (
            <p className={styles.tooltipReference}>
              Reference: {referenceRange.min}-{referenceRange.max}{unit}
            </p>
          )}
          {medicalTerm && (
            <p className={styles.tooltipHelp}>
              💡 Hover chart title for medical explanation
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const chartClasses = clsx(styles.trendChart, className);

  return (
    <div className={chartClasses} data-testid={testId}>
      <div className={styles.chartHeader}>
        <h3 className={styles.chartTitle}>
          {(() => {
            const medicalTerm = getMedicalTermForBiomarker(data.biomarkerId);
            if (medicalTerm) {
              return (
                <MedicalTooltip
                  term={medicalTerm as any}
                  showIcon={false}
                  trigger="hover"
                >
                  <span
                    style={{
                      textDecoration: "underline dotted",
                      cursor: "help",
                    }}
                  >
                    {getBiomarkerName(data.biomarkerId)} Trend
                  </span>
                </MedicalTooltip>
              );
            } else {
              return `${getBiomarkerName(data.biomarkerId)} Trend`;
            }
          })()}
        </h3>
        <div className={styles.trendIndicator}>
          <span
            className={clsx(styles.trendDirection, styles[data.overallTrend])}
          >
            {data.overallTrend === "increasing" && "↗"}
            {data.overallTrend === "decreasing" && "↘"}
            {data.overallTrend === "stable" && "→"}
          </span>
          <span className={styles.trendLabel}>{data.overallTrend}</span>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            {showGrid && (
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border-light, #e5e7eb)"
              />
            )}

            <XAxis
              dataKey="date"
              tick={{
                fontSize: 12,
                fill: "var(--color-text-secondary, #6b7280)",
              }}
              axisLine={{ stroke: "var(--color-border, #d1d5db)" }}
            />

            <YAxis
              tick={{
                fontSize: 12,
                fill: "var(--color-text-secondary, #6b7280)",
              }}
              axisLine={{ stroke: "var(--color-border, #d1d5db)" }}
              label={{
                value: unit,
                angle: -90,
                position: "insideLeft",
                style: {
                  textAnchor: "middle",
                  fill: "var(--color-text-secondary, #6b7280)",
                },
              }}
            />

            {/* Reference range lines */}
            {showReferenceLines && referenceRange && (
              <>
                <ReferenceLine
                  y={referenceRange.min}
                  stroke="var(--color-normal, #059669)"
                  strokeDasharray="5 5"
                  label={{ value: "Min Normal", position: "topRight" }}
                />
                <ReferenceLine
                  y={referenceRange.max}
                  stroke="var(--color-normal, #059669)"
                  strokeDasharray="5 5"
                  label={{ value: "Max Normal", position: "topRight" }}
                />
              </>
            )}

            <Tooltip content={<CustomTooltip />} />

            {showLegend && (
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
            )}

            <Line
              type="monotone"
              dataKey="value"
              stroke={getLineColor()}
              strokeWidth={3}
              dot={{
                fill: getLineColor(),
                strokeWidth: 2,
                r: 6,
              }}
              activeDot={{
                r: 8,
                stroke: getLineColor(),
                strokeWidth: 2,
                fill: "white",
              }}
              name={`${getBiomarkerName(data.biomarkerId)} ${unit}`}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendChart;
