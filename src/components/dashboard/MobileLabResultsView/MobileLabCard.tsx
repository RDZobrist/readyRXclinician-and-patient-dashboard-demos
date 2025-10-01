import React from 'react';
import { Badge } from '@/components/baseUI';
import type { LabStatus } from '@/types/labResults';
import styles from './MobileLabCard.module.css';

/**
 * Mobile Lab Card Component
 * 
 * Simplified card component optimized for mobile swipeable interface.
 * Displays lab result data in a clean, touch-friendly format.
 */

export interface MobileLabCardProps {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  status: LabStatus;
  referenceRange: string;
  date: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const MobileLabCard: React.FC<MobileLabCardProps> = ({
  id,
  testName,
  value,
  unit,
  status,
  referenceRange,
  date,
  isActive = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  if (status) console.log(status);
  const cardClasses = [
    styles.mobileCard,
    isActive && styles.active,
    onClick && styles.clickable
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
      data-testid={`mobile-lab-card-${id}`}
      id={`mobile-lab-card-${id}`}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.testName}>{testName}</h3>
        <Badge variant={status}>{status}</Badge>
      </div>
      
      <div className={styles.mainValue}>
        <span className={styles.value}>{value}</span>
        <span className={styles.unit}>{unit}</span>
      </div>
      
      <div className={styles.cardDetails}>
        <div className={styles.detailRow}>
          <span className={styles.label}>Reference Range:</span>
          <span className={styles.detailValue}>{referenceRange}</span>
        </div>
        
        <div className={styles.detailRow}>
          <span className={styles.label}>Date:</span>
          <span className={styles.detailValue}>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default MobileLabCard;
