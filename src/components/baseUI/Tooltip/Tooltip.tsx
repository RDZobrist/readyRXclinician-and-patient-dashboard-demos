import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  trigger?: 'hover' | 'click' | 'focus';
  showIcon?: boolean;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  disabled?: boolean;
  testId?: string;
  maxWidth?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'auto',
  trigger = 'hover',
  showIcon = false,
  children,
  className,
  delay = 300,
  disabled = false,
  testId = 'tooltip',
  maxWidth = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Calculate optimal position if 'auto' is selected
  const calculatePosition = () => {
    if (!triggerRef.current || position !== 'auto') return position;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Check if there's space above
    if (triggerRect.top > 200) return 'top';
    // Check if there's space below
    if (viewportHeight - triggerRect.bottom > 200) return 'bottom';
    // Check if there's space to the right
    if (viewportWidth - triggerRect.right > 250) return 'right';
    // Default to left
    return 'left';
  };

  const calculateTooltipStyle = (pos: string) => {
    if (!triggerRef.current) return {};

    const triggerRect = triggerRef.current.getBoundingClientRect();
    
    let style: React.CSSProperties = {
      maxWidth: `${maxWidth}px`,
      position: 'fixed',
      zIndex: 1000,
    };

    // Position tooltip based on calculated position
    switch (pos) {
      case 'top':
        style = {
          ...style,
          bottom: `${window.innerHeight - triggerRect.top + 8}px`,
          left: `${triggerRect.left + triggerRect.width / 2}px`,
          transform: 'translateX(-50%)',
        };
        break;
      case 'bottom':
        style = {
          ...style,
          top: `${triggerRect.bottom + 8}px`,
          left: `${triggerRect.left + triggerRect.width / 2}px`,
          transform: 'translateX(-50%)',
        };
        break;
      case 'left':
        style = {
          ...style,
          top: `${triggerRect.top + triggerRect.height / 2}px`,
          right: `${window.innerWidth - triggerRect.left + 8}px`,
          transform: 'translateY(-50%)',
        };
        break;
      case 'right':
        style = {
          ...style,
          top: `${triggerRect.top + triggerRect.height / 2}px`,
          left: `${triggerRect.right + 8}px`,
          transform: 'translateY(-50%)',
        };
        break;
    }

    return style;
  };

  const showTooltip = () => {
    if (disabled) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  
    // Calculate position and style before showing to prevent jumping
    const newPosition = calculatePosition();
    const newStyle = calculateTooltipStyle(newPosition);
    
    setTooltipPosition(newPosition);
    setTooltipStyle(newStyle);
  
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const handleClick = () => {
    if (trigger === 'click') {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isVisible) {
      hideTooltip();
    }
    if ((event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      if (trigger === 'click') {
        handleClick();
      } else if (trigger === 'focus' && isVisible) {
        hideTooltip();
      }
    }
  };

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVisible &&
        trigger === 'click' &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        hideTooltip();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isVisible, trigger]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const triggerProps = {
    ...(trigger === 'hover' && {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    }),
    ...(trigger === 'focus' && {
      onFocus: showTooltip,
      onBlur: hideTooltip,
    }),
    ...(trigger === 'click' && {
      onClick: handleClick,
    }),
    onKeyDown: handleKeyDown,
    tabIndex: (trigger === 'click' || trigger === 'focus') ? 0 : undefined,
    'aria-describedby': isVisible ? `${testId}-content` : undefined,
  };

  const triggerClasses = clsx(
    styles.trigger,
    {
      [styles.clickable]: trigger === 'click',
      [styles.iconTrigger]: showIcon && !children,
    },
    className
  );

  const tooltipClasses = clsx(
    styles.tooltip,
    styles[tooltipPosition],
    {
      [styles.visible]: isVisible,
    }
  );

  const renderTooltip = () => {
    if (!isVisible) return null;

    return createPortal(
      <div
        ref={tooltipRef}
        className={tooltipClasses}
        style={tooltipStyle}
        role="tooltip"
        id={`${testId}-content`}
        data-testid={`${testId}-content`}
      >
        <div className={styles.content}>
          {content}
        </div>
        <div className={styles.arrow} />
      </div>,
      document.body
    );
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={triggerClasses}
        data-testid={testId}
        {...triggerProps}
      >
        {children || (showIcon && (
          <InformationCircleIcon 
            className={styles.icon}
            aria-label="More information"
          />
        ))}
      </div>
      {renderTooltip()}
    </>
  );
};