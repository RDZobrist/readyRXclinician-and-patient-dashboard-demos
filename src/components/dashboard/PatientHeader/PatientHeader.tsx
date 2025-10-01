/**
 * PatientHeader Component - Healthcare Dashboard
 * Displays patient demographics, alerts, and key information
 * Adapts to Patient vs Clinician view modes
 */

import React from 'react';
import { 
  UserIcon, 
  CalendarIcon, 
  IdentificationIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePatient } from '@/hooks/usePatient';
import { useView } from '@/hooks/useView';
import type { ViewMode } from '@/types/view';
import styles from './PatientHeader.module.css';

export interface PatientHeaderProps {
  /** Whether to show patient actions (edit, contact, etc.) */
  showActions?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}

// Helper function to get patient initials
const getPatientInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Helper function to calculate age from date of birth
const calculateAge = (dateOfBirth: string): number => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

// Helper function to format phone number
const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const PatientHeader: React.FC<PatientHeaderProps> = ({
  showActions = true,
  className,
  testId = 'patient-header'
}) => {
  const { selectedPatient } = usePatient();
  const { currentView, isPatientView } = useView();
console.log(selectedPatient)
  // Get patient alerts (from mockPatient data)
  const patientAlerts = selectedPatient.alerts || [];
  const highPriorityAlerts = patientAlerts.filter(alert => alert.priority === 'high' && !alert.acknowledged);
  const mediumPriorityAlerts = patientAlerts.filter(alert => alert.priority === 'medium' && !alert.acknowledged);

  const headerClasses = clsx(
    styles.patientHeader,
    {
      [styles.patientView]: isPatientView,
      [styles.clinicianView]: !isPatientView,
    },
    className
  );

  const getAlertIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <ExclamationTriangleIcon className={styles.alertIcon} />;
      case 'medium':
        return <ExclamationCircleIcon className={styles.alertIcon} />;
      default:
        return <InformationCircleIcon className={styles.alertIcon} />;
    }
  };

  return (
    <div className={headerClasses} data-testid={testId}>
      <div className={styles.patientInfo}>
        {/* Patient Avatar */}
        <div className={styles.patientAvatar}>
          {selectedPatient.demographics?.photo ? (
            <img 
              src={selectedPatient.demographics.photo} 
              alt={`${selectedPatient.name} profile`}
            />
          ) : (
            getPatientInitials(selectedPatient.name)
          )}
        </div>

        {/* Patient Details */}
        <div className={styles.patientDetails}>
          <h1 className={styles.patientName}>
            {isPatientView ? 'Your Health Dashboard' : selectedPatient.name}
          </h1>
          
          <div className={styles.patientMeta}>
            {/* Age & Gender */}
            <div className={styles.metaItem}>
              <UserIcon className={styles.metaIcon} />
              <span>
                {selectedPatient.demographics?.age || selectedPatient.age} years • {' '}
                {selectedPatient.demographics?.gender || selectedPatient.gender}
              </span>
            </div>

            {/* Date of Birth (Clinician view only) */}
            {!isPatientView && selectedPatient.demographics?.dateOfBirth && (
              <div className={styles.metaItem}>
                <CalendarIcon className={styles.metaIcon} />
                <span>DOB: {new Date(selectedPatient.demographics.dateOfBirth).toLocaleDateString()}</span>
              </div>
            )}

            {/* MRN (Clinician view only) */}
            {!isPatientView && selectedPatient.demographics?.mrn && (
              <div className={styles.metaItem}>
                <IdentificationIcon className={styles.metaIcon} />
                <span>MRN: {selectedPatient.demographics.mrn}</span>
              </div>
            )}

            {/* Phone (if available) */}
            {selectedPatient.demographics?.phone && (
              <div className={styles.metaItem}>
                <PhoneIcon className={styles.metaIcon} />
                <span>{formatPhoneNumber(selectedPatient.demographics.phone)}</span>
              </div>
            )}

            {/* Primary Condition */}
            {selectedPatient.condition && (
              <div className={styles.metaItem}>
                <span>
                  {isPatientView ? 'Condition: ' : ''}{selectedPatient.condition}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Patient Actions & Alerts */}
      {showActions && (
        <div className={styles.patientActions}>
          {/* Alerts Section */}
          {(highPriorityAlerts.length > 0 || mediumPriorityAlerts.length > 0) && (
            <div className={styles.alertsSection}>
              {highPriorityAlerts.map((alert) => (
                <div key={alert.id} className={clsx(styles.alertBadge, styles.high)}>
                  {getAlertIcon('high')}
                  <span>{isPatientView ? 'Important' : 'High Priority'}</span>
                </div>
              ))}
              
              {mediumPriorityAlerts.map((alert) => (
                <div key={alert.id} className={clsx(styles.alertBadge, styles.medium)}>
                  {getAlertIcon('medium')}
                  <span>{isPatientView ? 'Notice' : 'Medium Priority'}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientHeader;
