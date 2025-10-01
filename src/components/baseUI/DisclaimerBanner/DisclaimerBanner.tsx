import React from 'react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import styles from './DisclaimerBanner.module.css';

export interface DisclaimerBannerProps {
  type?: 'ai-analysis' | 'automated-data' | 'prediction' | 'general';
  severity?: 'info' | 'warning' | 'critical';
  dismissible?: boolean;
  message?: string;
  /** Additional CSS classes */
  className?: string;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Test ID for automation */
  testId?: string;
}

const getDefaultMessage = (type: DisclaimerBannerProps['type']) => {
  switch (type) {
    case 'ai-analysis':
      return 'This analysis was generated using AI technology. Please review all results with a qualified healthcare professional before making medical decisions.';
    case 'automated-data':
      return 'Some data shown may be automatically processed. Verify critical information with original sources.';
    case 'prediction':
      return 'Predictive insights are AI-generated estimates. They should not replace professional medical judgment.';
    case 'general':
    default:
      return 'This dashboard uses AI and automated processing. Always consult healthcare professionals for medical decisions.';
  }
};

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({
  type = 'general',
  severity = 'warning',
  dismissible = false,
  message,
  className,
  onDismiss,
  testId = 'disclaimer-banner',
}) => {
  const [isDismissed, setIsDismissed] = React.useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) {
    return null;
  }

  const bannerClasses = clsx(
    styles.banner,
    styles[severity],
    className
  );

  const displayMessage = message || getDefaultMessage(type);

  return (
    <div 
      className={bannerClasses}
      role="alert"
      aria-live="polite"
      data-testid={testId}
    >
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <ExclamationTriangleIcon 
            className={styles.icon} 
            aria-hidden="true"
          />
        </div>
        
        <div className={styles.messageContainer}>
          <p className={styles.message}>
            {displayMessage}
          </p>
        </div>

        {dismissible && (
          <button
            type="button"
            className={styles.dismissButton}
            onClick={handleDismiss}
            aria-label="Dismiss disclaimer"
          >
            <XMarkIcon className={styles.dismissIcon} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
