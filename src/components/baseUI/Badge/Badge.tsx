/**
 * Badge Component - Healthcare Dashboard
 * Status indicators for lab results and medical alerts
 */

import React from 'react';
import clsx from 'clsx';
import type { BadgeProps } from '@/types';
import styles from './Badge.module.css';

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  pulse = false,
  removable = false,
  onRemove,
  className,
  children,
  testId,
  ...props
}) => {
  // Determine effective variant from status prop first, then variant prop
  let effectiveVariant = variant;

  if (variant && isHealthcareStatus(variant)) {
    // If variant is a healthcare status, map it
    effectiveVariant = getVariantFromStatus(variant);
  }
  
  
  const badgeClasses = clsx(
    styles.badge,
    styles[effectiveVariant],
    styles[size],
    {
      [styles.pulse]: pulse,
      [styles.removable]: removable,
    },
    className
  );

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <span
      className={badgeClasses}
      data-testid={testId}
      {...props}
    >
      <span className={styles.content}>{children}</span>
      {removable && (
        <button
          type="button"
          className={styles.removeButton}
          onClick={handleRemove}
          aria-label="Remove badge"
        >
          <svg
            className={styles.removeIcon}
            fill="none"
            viewBox="0 0 14 14"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4l6 6m0-6L4 10"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

// Helper function to check if a variant is a healthcare status
function isHealthcareStatus(variant: string): boolean {
  const healthcareStatuses = [
    'critical', 'dangerous', 'high', 'low',
    'warning', 'abnormal', 'elevated', 'borderline',
    'normal', 'good', 'success', 'within_range',
    'pending', 'unknown', 'processing'
  ];
  return healthcareStatuses.includes(variant.toLowerCase());
}

// Helper function to map medical status to badge variant
function getVariantFromStatus(status: string): string {
  const statusMap: Record<string, string> = {
    // Critical/Dangerous values
    critical: 'critical',
    dangerous: 'critical',
    high: 'critical',
    low: 'critical',
    
    // Warning/Abnormal values  
    warning: 'warning',
    abnormal: 'warning',
    elevated: 'warning',
    borderline: 'warning',
    
    // Normal/Good values
    normal: 'normal',
    good: 'normal',
    success: 'normal',
    within_range: 'normal',
    
    // Pending/Unknown
    pending: 'secondary',
    unknown: 'secondary',
    processing: 'secondary',
    
    // Info
    info: 'primary',
  };
  
  return statusMap[status.toLowerCase()] || 'primary';
}

export default Badge;
