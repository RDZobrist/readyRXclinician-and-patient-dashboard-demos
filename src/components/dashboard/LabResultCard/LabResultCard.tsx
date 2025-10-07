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
  result: LabResult;
  /** Visual variant of the card */
  variant?: 'mobile' | 'desktop' | 'compact';
  isActive?: boolean;
  onClick?: (result: LabResult) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}


export const LabResultCard: React.FC<LabResultCardProps> = ({
  result,
  variant = "desktop",
  isActive = false,
  onClick,
  className,
  testId,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(result);
    }
    return;
  };

  const cardClasses = [
    styles.labResultCard,
    styles[variant],
    isActive && styles.active,
    onClick && styles.clickable,
    className
  ].filter(Boolean).join(' ');
  
  const labResultDate: string = result.date && new Date(result.date).toLocaleDateString();

  return (
    <div 
      className={cardClasses}
      onClick={handleClick}
      data-testid={testId}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={isActive}
      onKeyDown={onClick ? (e: React.KeyboardEvent<HTMLDivElement>) => {
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
            <span>{labResultDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabResultCard;
