import React, { Component, ErrorInfo, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  className?: string;
  testId?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);

    // Log error for healthcare compliance
    console.error('Healthcare Dashboard Error:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
    });
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback
          error={this.state.error}
          onRetry={this.handleRetry}
          className={this.props.className}
          testId={this.props.testId}
        />
      );
    }

    return this.props.children;
  }
}

// Default Error Fallback Component
interface ErrorFallbackProps {
  error: Error | null;
  onRetry: () => void;
  className?: string;
  testId?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  onRetry,
  className,
  testId,
}) => {
  const errorClasses = clsx(
    styles.errorBoundary,
    className
  );

  return (
    <div 
      className={errorClasses}
      role="alert"
      aria-live="assertive"
      data-testid={testId || 'error-boundary'}
    >
      <div className={styles.errorIcon}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <div className={styles.errorContent}>
        <h2 className={styles.errorTitle}>
          Something went wrong
        </h2>
        
        <p className={styles.errorMessage}>
          We encountered an unexpected error while loading your healthcare data. 
          Your information is safe and secure.
        </p>

        <div className={styles.errorActions}>
          <button
            type="button"
            onClick={onRetry}
            className={styles.retryButton}
            aria-label="Retry loading data"
          >
            Try Again
          </button>
          
          <button
            type="button"
            onClick={() => window.location.reload()}
            className={styles.refreshButton}
            aria-label="Refresh the page"
          >
            Refresh Page
          </button>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <details className={styles.errorDetails}>
            <summary className={styles.errorSummary}>
              Technical Details (Development Only)
            </summary>
            <pre className={styles.errorStack}>
              {error.message}
              {'\n\n'}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

// Healthcare-specific error boundaries
export const PatientDataErrorBoundary: React.FC<{
  children: ReactNode;
  onError?: (error: Error) => void;
}> = ({ children, onError }) => (
  <ErrorBoundary
    onError={(error, errorInfo) => {
      onError?.(error);
      // Log patient data access error for HIPAA compliance
      console.error('Patient Data Access Error:', {
        error: error.message,
        timestamp: new Date().toISOString(),
        context: 'patient_data_access',
      });
    }}
    fallback={
      <div className={styles.medicalErrorFallback}>
        <h3>Unable to Load Patient Data</h3>
        <p>
          We're having trouble accessing patient information. 
          Please contact your system administrator if this persists.
        </p>
      </div>
    }
    testId="patient-data-error-boundary"
  >
    {children}
  </ErrorBoundary>
);

export const LabResultsErrorBoundary: React.FC<{
  children: ReactNode;
  onError?: (error: Error) => void;
}> = ({ children, onError }) => (
  <ErrorBoundary
    onError={(error, errorInfo) => {
      onError?.(error);
      console.error('Lab Results Error:', {
        error: error.message,
        timestamp: new Date().toISOString(),
        context: 'lab_results_display',
      });
    }}
    fallback={
      <div className={styles.medicalErrorFallback}>
        <h3>Lab Results Unavailable</h3>
        <p>
          Unable to display lab results at this time. 
          Please try refreshing or contact support.
        </p>
      </div>
    }
    testId="lab-results-error-boundary"
  >
    {children}
  </ErrorBoundary>
);

export const ChartErrorBoundary: React.FC<{
  children: ReactNode;
  onError?: (error: Error) => void;
}> = ({ children, onError }) => (
  <ErrorBoundary
    onError={(error, errorInfo) => {
      onError?.(error);
      console.error('Chart Rendering Error:', {
        error: error.message,
        timestamp: new Date().toISOString(),
        context: 'chart_visualization',
      });
    }}
    fallback={
      <div className={styles.chartErrorFallback}>
        <h4>Chart Unavailable</h4>
        <p>Unable to display chart data. Data may still be available in table format.</p>
      </div>
    }
    testId="chart-error-boundary"
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundary;
