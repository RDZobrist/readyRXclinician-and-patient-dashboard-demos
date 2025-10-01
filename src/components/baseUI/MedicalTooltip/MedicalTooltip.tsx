import React from 'react';
import { Tooltip, type TooltipProps } from '../Tooltip';
import { medicalDefinitions } from './medicalTooltipDefininitions';

export interface MedicalTooltipProps extends Omit<TooltipProps, 'content'> {
  /** Medical term to explain */
  term: 'glucose' | 'hba1c' | 'cholesterol' | 'blood-pressure' | 'triglycerides' | 'hdl' | 'ldl' | 'creatinine' | 'bun' | 'egfr' | 'diabetes' | 'hypertension' | 'bmi';
  /** Custom explanation override */
    customContent?: React.ReactNode;
    /** Font weight of the tooltip content */
    fontWeight?: number;
}



export const MedicalTooltip: React.FC<MedicalTooltipProps> = ({
  term,
  customContent,
  children,
  showIcon = true,
  trigger = 'hover',
  position = 'auto',
  fontWeight,
  ...props
}) => {
  const definition = medicalDefinitions[term];

  const tooltipContent = customContent || (
    <div>
      <div style={{ fontWeight: 600, marginBottom: '8px', color: '#10b981' }}>
        {definition.title}
      </div>
      <div style={{ marginBottom: definition.normalRange ? '8px' : '0' }}>
        {definition.definition}
      </div>
      {definition.normalRange && (
        <div style={{ 
          fontSize: '12px', 
          color: '#6b7280', 
          borderTop: '1px solid #374151',
          paddingTop: '6px',
          fontStyle: 'italic'
        }}>
          {definition.normalRange}
        </div>
      )}
    </div>
  );

  return (
    <Tooltip
      content={tooltipContent}
      showIcon={showIcon}
      trigger={trigger}
      position={position}
      maxWidth={320}
      {...props}
    >
      {children}
    </Tooltip>
  );
};
