import React from 'react';
import clsx from 'clsx';
import styles from './Loading.module.css';


export interface LoadingProps {
    type?: 'spinner' | 'skeleton' | 'dots';
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    className?: string;
    testId?: string;
  }

export const Loading: React.FC<LoadingProps> = ({
  type = 'spinner',
  size = 'md',
  text,
  className,
  testId,
}) => {
  const loadingClasses = clsx(
    styles.loading,
    styles[type],
    styles[size],
    className
  );
  

  if (type === 'skeleton') {
    return <SkeletonLoader size={size} className={className} testId={testId} />;
  }

  return (
    <div 
      className={loadingClasses}
      role="status"
      aria-live="polite"
      aria-label={text || 'Loading'}
      data-testid={testId}
    >
      {type === 'spinner' && (
        <div className={styles.spinner} aria-hidden="true" />
      )}
      
      {type === 'dots' && (
        <div className={styles.dots} aria-hidden="true">
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      )}
      
      {text && (
        <span className={styles.text}>{text}</span>
      )}
    </div>
  );
};

export const SkeletonLoader: React.FC<{
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    testId?: string;
  }> = ({ size = 'md', className, testId }) => {
    const skeletonClasses = clsx(
      styles.skeleton,
      styles[size],
      className
    );
  
    return (
      <div 
        className={skeletonClasses}
        role="status"
        aria-label="Loading content"
        data-testid={testId}
      >
        {/* Patient header skeleton */}
    
        
        {/* Lab results skeleton */}
        <div className={styles.skeletonContent}>
        <div className={styles.skeletonLine} style={{ width: '85%' }} />
        <div className={styles.skeletonLine} style={{ width: '85%' }} />
        <div className={styles.skeletonLine} style={{ width: '85%' }} />
          <div className={styles.skeletonLine} style={{ width: '85%' }} />
          <div className={styles.skeletonLine} style={{ width: '85%' }} />
          <div className={styles.skeletonLine} style={{ width: '85%' }} />
        </div>
        

      </div>
    );
  };

export const PatientDataLoading: React.FC<{ className?: string }> = ({ className }) => (
  <Loading 
    type="skeleton" 
    size="lg" 
    text="Loading patient data..."
    className={className}
    testId="patient-data-loading"
  />
);

export const LabResultsLoading: React.FC<{ className?: string }> = ({ className }) => (
  <Loading 
    type="skeleton" 
    size="md" 
    text="Loading lab results..."
    className={className}
    testId="lab-results-loading"
  />
);

export const ChartLoading: React.FC<{ className?: string }> = ({ className }) => (
  <Loading 
    type="dots" 
    size="sm" 
    text="Loading chart data..."
    className={className}
    testId="chart-loading"
  />
);

export const TableSkeletonLoader: React.FC<{
  rows?: number;
  columns?: number;
  className?: string;
  testId?: string;
}> = ({ rows = 5, columns = 5, className, testId }) => {
  return (
    <div 
      className={clsx(styles.tableSkeleton, className)}
      role="status"
      aria-label="Loading table data"
      data-testid={testId}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.skeletonTableRow}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div 
              key={colIndex} 
              className={styles.skeletonTableCell}
              style={{ 
                width: colIndex === 0 ? '25%' : colIndex === 1 ? '20%' : colIndex === 2 ? '25%' : colIndex === 3 ? '15%' : '15%',
                animationDelay: `${(rowIndex * columns + colIndex) * 0.1}s`
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

