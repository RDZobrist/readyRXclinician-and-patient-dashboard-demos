/**
 * DashboardContent Component - Ready RX Healthcare Dashboard
 * Main dashboard layout orchestrating patient info, lab results, and charts
 * Handles view switching between Patient and Clinician modes
 */

import React from 'react';
import { 
  DashboardLayout, 
  LabResultsTable, 
  TrendChart, 
  PatientHeader, 
  PatientSummary 
} from '@/components/dashboard';
import { ViewSelector } from '@/components/baseUI';
import { HealthSuggestionsCard } from '@/components/dashboard/HealthSuggestionsCard';
import { useView } from '@/hooks/useView';
import { usePatient } from '@/hooks/usePatient';
import { patients } from '@/data/mockData';

export interface DashboardContentProps {
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({
  className,
  testId = 'dashboard-content'
}) => {
  const { currentView, setView, viewConfig, isPatientView } = useView();
  const { selectedPatient, setSelectedPatient } = usePatient();

  // Header actions - includes ViewSelector and Patient Selector (clinician only)
  const headerActions = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      {/* Patient Selector - Clinician View Only */}
      {!isPatientView && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label
            htmlFor="patient-selector"
            style={{ fontSize: '14px', color: '#6b7280' }}
            id="patient-selector-label"
          >
            Patient:
          </label>
          <select
            id="patient-selector"
            value={selectedPatient.id}
            onChange={(e) => {
              const patient = patients.find(p => p.id === e.target.value);
              if (patient) setSelectedPatient(patient);
            }}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '14px',
              minWidth: '200px'
            }}
            aria-labelledby="patient-selector-label"
            aria-describedby="patient-selector-help"
            role="combobox"
            aria-expanded="false"
            aria-required="true"
          >
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>
      )}
      
      {/* View Selector */}
      <ViewSelector 
        currentView={currentView}
        onViewChange={setView}
        testId="main-view-selector"
      />
    </div>
  );

  return (
    <DashboardLayout 
      title="Ready RX Dashboard"
      subtitle={`Patient Health Monitoring & Lab Results - ${currentView === 'patient-view' ? 'Patient' : 'Clinician'} View`}
      testId="main-dashboard"
      className={className}
      headerActions={headerActions}
    >
      {/* Patient Information Section */}
      <div className="patient-info-section">
        <PatientHeader />
        <PatientSummary />
      </div>

      {/* Main Content Grid */}
      <div className="main-content-grid">
        {/* Left Column - Lab Results */}
        <div className="lab-results-column">
          <LabResultsTable 
            view={currentView === 'patient-view' ? 'patient' : 'clinician'}
          />
        </div>

        {/* Right Column - Charts */}
        <div className="charts-column">
          <TrendChart 
            height={400}
            showGrid={true}
            showLegend={true}
            showReferenceLines={viewConfig.showTechnicalDetails}
            testId="patient-trend-chart"
          />
        </div>
        <HealthSuggestionsCard />
      </div>
    </DashboardLayout>
  );
};

export default DashboardContent;
