import React, { useState } from 'react';
import { MobileLabCard } from './MobileLabCard';
import type { LabStatus } from '@/types/labResults';
import styles from './MobileLabResultsView.module.css';

/**
 * Mobile Lab Results View Component
 * 
 * A mobile-optimized swipeable interface for viewing lab results.
 * Features touch gestures, card indicators, and accessibility support.
 * Now supports Patient vs Clinician view modes.
 * 
 * @example
 * ```tsx
 * <MobileLabResultsView 
 *   results={labResults}
 *   showTechnicalDetails={false}
 *   simplifiedLanguage={true}
 * />
 * ```
 */

export interface MobileLabResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  status: LabStatus;
  referenceRange: string;
  date: string;
  patient?: string;
}

export interface MobileLabResultsViewProps {
  /** Array of lab results to display */
  results: MobileLabResult[];
  /** Whether to show technical details (reference ranges, codes, etc.) */
  showTechnicalDetails?: boolean;
  /** Whether to use simplified, patient-friendly language */
  simplifiedLanguage?: boolean;
  /** Patient name for header display */
  patientName?: string;
  /** Initial card index to display */
  initialCard?: number;
  /** Callback when a result is selected/tapped */
  onResultSelect?: (result: MobileLabResult) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}

export const MobileLabResultsView: React.FC<MobileLabResultsViewProps> = ({
  results,
  showTechnicalDetails = true,
  simplifiedLanguage = false,
  patientName = 'Patient',
  initialCard = 0,
  onResultSelect,
  className,
  testId = 'mobile-lab-results',
}) => {
  const [currentCard, setCurrentCard] = useState(initialCard);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentCard < results.length - 1) {
      setCurrentCard(currentCard + 1);
    }
    if (isRightSwipe && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleCardSelect = (index: number) => {
    setCurrentCard(index);
    if (onResultSelect) {
      onResultSelect(results[index]);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardSelect(index);
    }
  };

  if (results.length === 0) {
    return (
      <div className={`${styles.mobileLabResults} ${className || ''}`} data-testid={testId}>
        <div className={styles.noResults}>
          <p>{simplifiedLanguage ? 'No test results available' : 'No lab results found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${styles.mobileLabResults} ${className || ''}`}
      data-testid={testId}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>
          Lab Results
        </h2>
        {simplifiedLanguage && (
          <p className={styles.subtitle}>
            Swipe left or right to view different tests
          </p>
        )}
      </div>

      <div className={styles.cardContainer}>
        <div 
          className={styles.cardTrack}
          style={{ transform: `translateX(-${currentCard * 100}%)` }}
        >
          {results.map((result, index) => (
            <div key={result.id} className={styles.cardSlide}>
              <MobileLabCard
                result={result}
                isActive={index === currentCard}
                showTechnicalDetails={showTechnicalDetails}
                simplifiedLanguage={simplifiedLanguage}
                onClick={() => handleCardSelect(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                testId={`${testId}-card-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Card indicators */}
      <div className={styles.indicators} role="tablist" aria-label="Lab result navigation">
        {results.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentCard ? styles.active : ''}`}
            onClick={() => handleCardSelect(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={index === currentCard}
            aria-label={`View ${results[index].testName} result`}
            data-testid={`${testId}-indicator-${index}`}
          />
        ))}
      </div>

      {/* Navigation info */}
      <div className={styles.navigation}>
        <span className={styles.cardCounter}>
          {currentCard + 1} of {results.length}
        </span>
        {results.length > 1 && (
          <p className={styles.swipeHint}>
            {simplifiedLanguage ? 'Swipe to see more results' : 'Swipe or tap indicators to navigate'}
          </p>
        )}
      </div>
    </div>
  );
};
