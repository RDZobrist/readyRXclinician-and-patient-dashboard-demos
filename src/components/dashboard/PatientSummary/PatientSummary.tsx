/**
 * PatientSummary Component - Healthcare Dashboard
 * Displays key health metrics in an attractive card layout
 * Adapts content for Patient vs Clinician views
 */

import React from "react";
import {
  HeartIcon,
  BeakerIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { format } from "date-fns";
import { usePatient } from "@/hooks/usePatient";
import { useView } from "@/hooks/useView";
import { labResults } from "@/data/mockData";
import { MedicalTooltip } from "@/components/baseUI/MedicalTooltip";
import styles from "./PatientSummary.module.css";
import { Tooltip } from "@/components/baseUI";

export interface PatientSummaryProps {
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}

// Helper function to get latest lab result for a patient and test
const getLatestLabResult = (patientName: string, testName: string) => {
  return labResults
    .filter(
      (result) => result.patient === patientName && result.testName === testName
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
};

// Helper function to get trend direction icon
const getTrendIcon = (direction: string) => {
  switch (direction) {
    case "increasing":
      return <ArrowTrendingUpIcon className={styles.trendIcon} />;
    case "decreasing":
      return <ArrowTrendingDownIcon className={styles.trendIcon} />;
    default:
      return <MinusIcon className={styles.trendIcon} />;
  }
};

// Helper function to get biomarker icon
const getBiomarkerIcon = (testName: string) => {
  switch (testName.toLowerCase()) {
    case "blood pressure":
      return <HeartIcon className={styles.cardIcon} />;
    case "weight":
      return <ScaleIcon className={styles.cardIcon} />;
    default:
      return <BeakerIcon className={styles.cardIcon} />;
  }
};

export const PatientSummary: React.FC<PatientSummaryProps> = ({
  className,
  testId = "patient-summary",
}) => {
  const { selectedPatient } = usePatient();
  const { isPatientView } = useView();

  // Key biomarkers to display in summary
  const keyBiomarkers = [
    "Glucose",
    "HbA1c",
    "Total Cholesterol",
    "Blood Pressure",
    "Weight",
  ];

  // Get latest results for each key biomarker
  const summaryData = keyBiomarkers
    .map((biomarker) => {
      const latestResult = getLatestLabResult(selectedPatient.name, biomarker);
      return {
        biomarker,
        result: latestResult,
        // Mock trend data - in real app this would come from historical analysis
        trend:
          Math.random() > 0.5
            ? "stable"
            : Math.random() > 0.5
            ? "increasing"
            : "decreasing",
      };
    })
    .filter((item) => item.result); // Only show biomarkers with data

  const containerClasses = clsx(
    styles.patientSummary,
    {
      [styles.patientView]: isPatientView,
      [styles.clinicianView]: !isPatientView,
    },
    className
  );
  const getMedicalTerm = (biomarker: string): string | null => {
    const termMap: Record<string, string> = {
      'Glucose': 'glucose',
      'HbA1c': 'hba1c', 
      'Total Cholesterol': 'cholesterol',
      'Blood Pressure': 'blood-pressure',
      'Weight': 'weight'
    };
    return termMap[biomarker] || null;
  };

  if (summaryData.length === 0) {
    return (
      <div className={containerClasses} data-testid={testId}>
        <div className={styles.summaryCard}>
          <div className={styles.cardContent}>
            <p>No recent lab results available for {selectedPatient.name}</p>
          </div>
        </div>
      </div>
    );
  }

  

  return (
    <div className={containerClasses} data-testid={testId}>
      {summaryData.map(({ biomarker, result, trend }) => (
        <div key={biomarker} className={styles.summaryCard}>
          <div className={styles.cardHeader}>
            {(() => {
              const medicalTerm = getMedicalTerm(biomarker);
              if (medicalTerm) {
                const term = medicalTerm as any;
                console.log(term);
                return (
                  <MedicalTooltip term={term} showIcon={false} trigger="hover">
                    <h3 className={styles.cardTitle}>
                      {getBiomarkerIcon(biomarker)}
                      <span>{isPatientView ? biomarker : `${biomarker} Level`}</span>
                    </h3>
                  </MedicalTooltip>
                );
              } else {
                return (
                  <Tooltip content={`Learn more about ${biomarker}`} trigger="hover">
                    <h3 className={styles.cardTitle}>
                      {getBiomarkerIcon(biomarker)}
                      <span>{isPatientView ? biomarker : `${biomarker} Level`}</span>
                    </h3>
                  </Tooltip>
                );
              }
            })()}
            <div
              className={clsx(styles.statusIndicator, styles[result.status])}
            />
          </div>

          <div className={styles.cardContent}>
            <div className={clsx(styles.primaryValue, styles[result.status])}>
              {result.value}
              <span className={styles.valueUnit}>{result.unit}</span>
            </div>

            <div className={styles.secondaryInfo}>
              <div className={clsx(styles.trendIndicator, styles[trend])}>
                {getTrendIcon(trend)}
                <span>
                  {trend === "increasing"
                    ? "Trending up"
                    : trend === "decreasing"
                    ? "Trending down"
                    : "Stable"}
                </span>
              </div>

              {!isPatientView && (
                <div className={styles.referenceRange}>
                  Normal: {result.referenceRange}
                </div>
              )}
            </div>

            <div className={styles.lastUpdated}>
              {isPatientView ? "Last checked" : "Last result"}:{" "}
              {format(new Date(result.date), "MMM d, yyyy")}
            </div>
          </div>
        </div>
      ))}

      {/* Summary insights card for patient view */}
      {isPatientView && (
        <div className={styles.summaryCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>
              <HeartIcon className={styles.cardIcon} />
              <span>Health Summary</span>
            </h3>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.primaryValue}>
              {
                summaryData.filter((item) => item.result.status === "normal")
                  .length
              }
              /{summaryData.length}
            </div>
            <div className={styles.secondaryInfo}>
              <span>Values in normal range</span>
            </div>
            <div className={styles.lastUpdated}>
              Keep up the great work with your health management!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientSummary;
