/**
 * ViewSelector Component - Healthcare Dashboard
 * Toggle between Patient and Clinician view modes
 * Demonstrates component reusability and role-based UI patterns
 */

import React from 'react';
import { UserIcon, HeartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { ViewMode, ViewSelectorProps } from '@/types/view';
import styles from './ViewSelector.module.css';

export const ViewSelector: React.FC<ViewSelectorProps> = ({
  currentView,
  onViewChange,
  disabled = false,
  className,
  testId = 'view-selector'
}) => {
  const handleViewChange = (view: ViewMode) => {
    if (!disabled && view !== currentView) {
      onViewChange(view);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, view: ViewMode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleViewChange(view);
    }
  };

  return (
    <div 
      className={clsx(styles.viewSelector, className)}
      data-testid={testId}
      role="tablist"
      aria-label="View mode selector"
    >
      {/* Patient View Button */}
      <button
        type="button"
        className={clsx(
          styles.viewButton,
          styles.patientView,
          { [styles.active]: currentView === 'patient-view' }
        )}
        onClick={() => handleViewChange('patient-view')}
        onKeyDown={(e) => handleKeyDown(e, 'patient-view')}
        disabled={disabled}
        role="tab"
        aria-selected={currentView === 'patient-view'}
        aria-controls="dashboard-content"
        data-testid="patient-view-button"
      >
        <HeartIcon className={styles.icon} aria-hidden="true" />
        <span className={styles.label}>Patient View</span>
      </button>

      {/* Clinician View Button */}
      <button
        type="button"
        className={clsx(
          styles.viewButton,
          styles.clinicianView,
          { [styles.active]: currentView === 'clinician-view' }
        )}
        onClick={() => handleViewChange('clinician-view')}
        onKeyDown={(e) => handleKeyDown(e, 'clinician-view')}
        disabled={disabled}
        role="tab"
        aria-selected={currentView === 'clinician-view'}
        aria-controls="dashboard-content"
        data-testid="clinician-view-button"
      >
        <UserIcon className={styles.icon} aria-hidden="true" />
        <span className={styles.label}>Clinician View</span>
      </button>
    </div>
  );
};

export default ViewSelector;
