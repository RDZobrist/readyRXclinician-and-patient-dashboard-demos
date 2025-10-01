import React, { ReactNode } from 'react';
import { usePatient } from '@/hooks/usePatient';
import styles from './DashboardLayout.module.css';

/**
 * Dashboard Layout Component
 * 
 * Provides a consistent layout structure for healthcare dashboard views.
 * Includes header, patient context, and flexible content area.
 * 
 * @example
 * ```tsx
 * <DashboardLayout title="Patient Overview">
 *   <LabResultsTable />
 *   <TrendChart />
 * </DashboardLayout>
 * ```
 */

export interface DashboardLayoutProps {
  /** Main title for the dashboard */
  title?: string;
  /** Subtitle or additional context */
  subtitle?: string;
  /** Child components to render in the content area */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
  /** Whether to show patient info in header */
  showPatientInfo?: boolean;
  /** Custom header actions (e.g., buttons, filters) */
  headerActions?: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  title = 'Ready RX Customer Portal',
  subtitle,
  children,
  className,
  testId,
  showPatientInfo = true,
  headerActions
}) => {
  const { selectedPatient } = usePatient();

  const containerClasses = [
    styles.dashboardLayout,
    className
  ].filter(Boolean).join(' ');

  return (
    <main className={containerClasses} data-testid={testId}>
      <header className={styles.dashboardHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && (
              <p className={styles.subtitle}>{subtitle}</p>
            )}
            {showPatientInfo && (
              <div className={styles.patientInfo}>
                <span className={styles.patientLabel}>Patient:</span>
                <span className={styles.patientName}>{selectedPatient.name}</span>
                <span className={styles.patientDetails}>
                  {selectedPatient.age} years • {selectedPatient.condition}
                </span>
              </div>
            )}
          </div>
          
          {headerActions && (
            <div className={styles.headerActions}>
              {headerActions}
            </div>
          )}
        </div>
      </header>
      
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
