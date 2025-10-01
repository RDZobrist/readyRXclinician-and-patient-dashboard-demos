import React from 'react';
import { Card, Badge, DisclaimerBanner } from '@/components/baseUI';
import { 
  HeartIcon, 
  SparklesIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';
import { usePatient } from '@/hooks/usePatient';
import { useView } from '@/hooks/useView';
import { labResults } from '@/data/mockData';
import clsx from 'clsx';
import styles from './HealthSuggestionsCard.module.css';

export interface HealthSuggestionsCardProps {
  /** Additional CSS classes */
  className?: string;
  /** Test ID for automation */
  testId?: string;
}

interface HealthSuggestion {
  id: string;
  type: 'improvement' | 'maintain' | 'caution' | 'urgent';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: 'diet' | 'exercise' | 'medication' | 'lifestyle' | 'monitoring';
}

const generateSuggestions = (patientName: string, isPatientView: boolean): HealthSuggestion[] => {
  // Get latest lab results for the patient
  const patientResults = labResults.filter(result => result.patient === patientName);
  const latestResults = patientResults.reduce((latest, current) => {
    if (!latest[current.testName] || new Date(current.date) > new Date(latest[current.testName].date)) {
      latest[current.testName] = current;
    }
    return latest;
  }, {} as Record<string, any>);

  const suggestions: HealthSuggestion[] = [];

  // Analyze glucose levels
  const glucose = latestResults['Glucose'];
  if (glucose) {
    if (glucose.value > 140) {
      suggestions.push({
        id: 'glucose-high',
        type: 'caution',
        title: 'Monitor Blood Sugar',
        description: isPatientView ?
        'Your glucose levels are elevated. Consider reducing refined carbs and increasing fiber intake.'
        :
        'Your glucose levels are elevated. Consider reducing refined carbs and increasing fiber intake.',
        priority: 'high',
        category: 'diet'
      });
    } else if (glucose.value > 100) {
      suggestions.push({
        id: 'glucose-borderline',
        type: 'improvement',
        title: 'Optimize Blood Sugar',
        description: isPatientView ?
        'Your glucose is in the pre-diabetic range. Regular exercise and balanced meals can help.'
        :
        'Your glucose is in the pre-diabetic range. Regular exercise and balanced meals can help.',
        priority: 'medium',
        category: 'lifestyle'
      });
    } else {
      suggestions.push({
        id: 'glucose-good',
        type: 'maintain',
        title: 'Great Glucose Control',
        description: isPatientView ?
        'Your blood sugar levels are excellent. Keep up your current healthy habits!'
        :
        'Your blood sugar levels are excellent. Keep up your current healthy habits!',
        priority: 'low',
        category: 'lifestyle'
      });
    }
  }

  // Analyze HbA1c
  const hba1c = latestResults['HbA1c'];
  if (hba1c) {
    if (hba1c.value > 7.0) {
      suggestions.push({
        id: 'hba1c-high',
        type: 'urgent',
        title: 'Diabetes Management',
        description: isPatientView ?
        'Your HbA1c indicates poor glucose control. Consult your doctor about medication adjustments.'
        :
        'Your HbA1c indicates poor glucose control. Consult your doctor about medication adjustments.',
        priority: 'high',
        category: 'medication'
      });
    } else if (hba1c.value > 5.7) {
      suggestions.push({
        id: 'hba1c-borderline',
        title: 'Pre-diabetes Prevention',
        type: 'improvement',
        description: isPatientView ?
        'Focus on weight management and regular physical activity to prevent diabetes progression.'
        :
        'Focus on weight management and regular physical activity to prevent diabetes progression.',
        priority: 'medium',
        category: 'exercise'
      });
    }
  }

  // Analyze cholesterol
  const cholesterol = latestResults['Total Cholesterol'];
  if (cholesterol && cholesterol.value > 200) {
    suggestions.push({
      id: 'cholesterol-high',
      type: 'caution',
      title: 'Heart Health Focus',
      description: isPatientView ?
      'Consider heart-healthy foods like oats, nuts, and fatty fish to help lower cholesterol.'
      :
      'Consider heart-healthy foods like oats, nuts, and fatty fish to help lower cholesterol.',
      priority: 'medium',
      category: 'diet'
    });
  }

  // Add general wellness suggestions
  suggestions.push({
    id: 'regular-monitoring',
    type: 'maintain',
    title: 'Continue Regular Check-ups',
    description: isPatientView ?
    'Keep up with your regular lab work and health screenings for optimal health monitoring.'
    :
    'Keep up with your regular lab work and health screenings for optimal health monitoring.',
    priority: 'low',
    category: 'monitoring'
  });

  return suggestions.slice(0, 4); // Limit to 4 suggestions
};

const getSuggestionIcon = (type: HealthSuggestion['type']) => {
  switch (type) {
    case 'urgent':
      return <ExclamationTriangleIcon className={styles.iconUrgent} />;
    case 'caution':
      return <ExclamationTriangleIcon className={styles.iconCaution} />;
    case 'improvement':
      return <SparklesIcon className={styles.iconImprovement} />;
    case 'maintain':
      return <CheckCircleIcon className={styles.iconMaintain} />;
    default:
      return <HeartIcon className={styles.iconDefault} />;
  }
};

const getSuggestionBadgeVariant = (type: HealthSuggestion['type']) => {
  switch (type) {
    case 'urgent':
      return 'critical';
    case 'caution':
      return 'warning';
    case 'improvement':
      return 'primary';
    case 'maintain':
      return 'normal';
    default:
      return 'secondary';
  }
};
const headerContent = () => (
    <div className={styles.header}>
    <div className={styles.titleSection}>
      <SparklesIcon className={styles.headerIcon} />
      <h3 className={styles.title}>Health Insights</h3>
    </div>
    <Badge variant="primary" size="sm">
      AI-Generated
    </Badge>
  </div>)

export const HealthSuggestionsCard: React.FC<HealthSuggestionsCardProps> = ({
  className,
  testId = 'health-suggestions-card',
}) => {
  const { selectedPatient } = usePatient();
  const { isPatientView } = useView();
  const suggestions = generateSuggestions(selectedPatient.name, isPatientView);

  const cardClasses = clsx(styles.card, className);
  return (
    <div className={cardClasses} data-testid={testId}>
      <Card
        header={headerContent()}
        className={styles.cardContent}
      >
        {/* AI Disclaimer */}
        <DisclaimerBanner
          type="ai-analysis"
          severity="info"
          dismissible={false}
          message="These suggestions are AI-generated based on your lab results. Always consult your healthcare provider before making health decisions."
          className={styles.disclaimer}
        />

        {/* Suggestions List */}
        <div className={styles.suggestionsList}>
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className={styles.suggestionItem}>
              <div className={styles.suggestionIcon}>
                {getSuggestionIcon(suggestion.type)}
              </div>
              
              <div className={styles.suggestionContent}>
                <div className={styles.suggestionHeader}>
                  <h4 className={styles.suggestionTitle}>
                    {suggestion.title}
                  </h4>
                  <Badge 
                    variant={getSuggestionBadgeVariant(suggestion.type)}
                    size="sm"
                  >
                    {suggestion.category}
                  </Badge>
                </div>
                
                <p className={styles.suggestionDescription}>
                  {suggestion.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            💡 Based on your latest lab results from {new Date().toLocaleDateString()}
          </p>
        </div>
      </Card>
    </div>
  );
};
