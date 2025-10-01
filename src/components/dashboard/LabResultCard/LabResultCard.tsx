import React from 'react';
import { Badge } from '@/components/baseUI';
import styles from './LabResultCard.module.css';

/**
 * Lab Result Card Component
 * 
 * A reusable card component for displaying individual lab test results
 * with status indicators, values, reference ranges, and dates.
 * 
 * @example
 * ```tsx
 * <LabResultCard 
 *   result={{
 *     id: '1',
 *     testName: 'Glucose',
 *     value: 145,
 *     unit: 'mg/dL',
 *     status: 'high',
 *     referenceRange: '70-99 mg/dL',
 *     date: '2024-01-15'
 *   }}
 *   variant="mobile"
 *   isActive={true}
 * />
 * ```
 */

export interface LabResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  status: 'normal' | 'high' | 'elevated' | 'low' | 'critical';
  referenceRange: string;
  date: string;
}

export interface LabResultCardProps {
  /** Lab result data to display */
  result: LabResult;
  /** Visual variant of the card */
  variant?: 'mobile' | 'desktop' | 'compact';
  /** Whether this card is currently active/selected */
  isActive?: boolean;
  /** Optional click handler */
  onClick?: (result: LabResult) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}

export const LabResultCard: React.FC<LabResultCardProps> = ({
  result,
  variant = 'mobile',
  isActive = false,
  onClick,
  className,
  testId,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(result);
    }
  };

  const cardClasses = [
    styles.labResultCard,
    styles[variant],
    isActive && styles.active,
    onClick && styles.clickable,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={handleClick}
      data-testid={testId}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.testName}>{result.testName}</h3>
          <Badge variant={result.status}>{result.status}</Badge>
        </div>
        
        <div className={styles.cardBody}>
          <div className={styles.mainValue}>
            <span className={styles.value}>{result.value}</span>
            <span className={styles.unit}>{result.unit}</span>
          </div>
          
          <div className={styles.referenceRange}>
            <label>Reference Range:</label>
            <span>{result.referenceRange}</span>
          </div>
          
          <div className={styles.testDate}>
            <label>Date:</label>
            <span>{new Date(result.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabResultCard;
