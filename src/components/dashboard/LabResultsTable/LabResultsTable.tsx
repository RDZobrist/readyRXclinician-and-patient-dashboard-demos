import React, { useState, useEffect } from "react";
import { Table, Badge } from "@/components/baseUI";
import { LabResultsLoading } from "@/components/baseUI/Loading";
import { MobileLabResultsView } from "@/components/dashboard/MobileLabResultsView";
import { usePatient } from "@/hooks/usePatient";
import { labResults } from "@/data/mockData";
import { format } from "date-fns";
import styles from "./LabResultsTable.module.css";

export interface LabResultsTableProps {
  /** View configuration */
  view?: "patient" | "clinician";
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}

const getColumns = (view: "patient" | "clinician") => {
  const baseColumns = [
    {
      key: "testName",
      header: view === "patient" ? "Test" : "Test Name",
      sortable: true,
    },
    {
      key: "value",
      header: view === "patient" ? "Your Result" : "Value",
      sortable: true,
      accessor: (item: any) => `${item.value} ${item.unit}`,
    },
  ];

  if (view === "clinician") {
    baseColumns.push({
      key: "referenceRange",
      header: "Reference Range",
      accessor: (item: any) => item.referenceRange,
    });
  }

  baseColumns.push({
    key: "status",
    header: view === "patient" ? "Result Status" : "Status",
    sortable: true,
    accessor: (item: any) => <Badge variant={item.status}>{item.status}</Badge>,
  });

  baseColumns.push({
    key: "date",
    header: "Date",
    sortable: true,
    accessor: (item: any) => format(new Date(item.date), "MMM d, yyyy"),
  });

  return baseColumns;
};

// Helper function to get unique dates for a patient
const getPatientDates = (patientName: string) => {
  const patientResults = labResults.filter(
    (result) => result.patient === patientName
  );
  const uniqueDates = [...new Set(patientResults.map((result) => result.date))];
  return uniqueDates.sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  ); // Most recent first
};

export const LabResultsTable: React.FC<LabResultsTableProps> = ({
  view = "clinician",
  className,
  testId = "lab-results-table",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { selectedPatient } = usePatient();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  // Get available dates for the selected patient
  const availableDates = getPatientDates(selectedPatient.name);

  // Set default date to most recent when patient changes
  useEffect(() => {
    if (availableDates.length > 0) {
      setSelectedDate(availableDates[0]); // Most recent date
    }
  }, [selectedPatient.name]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter data with loading state
  useEffect(() => {
    setIsLoading(true);
    
    const filterData = async () => {
      // Add delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const results = labResults.filter(
        (result) =>
          result.patient === selectedPatient.name && result.date === selectedDate
      );
      
      setFilteredResults(results);
      setIsLoading(false);
    };

    if (selectedDate && selectedPatient.name) {
      filterData();
    } else {
      setFilteredResults([]);
      setIsLoading(false);
    }
  }, [selectedPatient.name, selectedDate]);

  const columns = getColumns(view);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDate: string = event.target.value;
    setSelectedDate(selectedDate);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.patientInfo}>
            <h2>{view === "patient" ? "Your Lab Results" : "Lab Results"}</h2>
            <p className={styles.patientDetails}>
              {selectedPatient.name} • {selectedPatient.age} years •{" "}
              {selectedPatient.condition}
            </p>
          </div>
        </div>
        <LabResultsLoading />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className={styles.mobileContainer}>
        {/* Date Selector for Mobile */}
        <div className={styles.dateSelector}>
          <label htmlFor="date-select-mobile" className={styles.selectorLabel}>
            Test Date:
          </label>
          <select
            id="date-select-mobile"
            value={selectedDate}
            onChange={handleDateChange}
            className={styles.dateSelect}
          >
            {availableDates.map((date) => (
              <option key={date} value={date}>
                {format(new Date(date), "MMM d, yyyy")}
              </option>
            ))}
          </select>
        </div>

        <MobileLabResultsView
          results={filteredResults}
          patientName={selectedPatient.name}
          onResultSelect={(result) => console.log("Selected:", result)}
        />
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.patientInfo}>
          <h2>{view === "patient" ? "Your Lab Results" : "Lab Results"}</h2>
          <p className={styles.patientDetails}>
            {selectedPatient.name} • {selectedPatient.age} years •{" "}
            {selectedPatient.condition}
          </p>
        </div>

        {/* Date Selector for Desktop */}
        <div className={styles.dateSelector}>
          <label htmlFor="date-select-desktop" className={styles.selectorLabel}>
            Test Date:
          </label>
          <select
            id="date-select-desktop"
            value={selectedDate}
            onChange={handleDateChange}
            className={styles.dateSelect}
          >
            {availableDates.map((date) => (
              <option key={date} value={date}>
                {format(new Date(date), "MMM d, yyyy")}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Table
        key={`${selectedPatient.name}-${selectedDate}`}
        columns={columns}
        data={filteredResults}
        isLoading={isLoading}
        caption={
          selectedDate &&
         `${format(
                new Date(selectedDate),
                "MMM d, yyyy"
              )}`
       
        }
        testId="lab-results-table"
      />

      {filteredResults.length === 0 && selectedDate && !isLoading && (
        <div className={styles.noResults}>
          No lab results found for {selectedPatient.name} on{" "}
          {format(new Date(selectedDate), "MMM d, yyyy")}
        </div>
      )}

      {!selectedDate && !isLoading && (
        <div className={styles.noResults}>
          No test dates available for {selectedPatient.name}
        </div>
      )}
    </div>
  );
};
