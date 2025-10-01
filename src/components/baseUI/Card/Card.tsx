import React from 'react';
import clsx from 'clsx';
import type { CardProps } from '@/types';
import styles from './Card.module.css';

export const Card: React.FC<CardProps> = ({
  header,
  footer,
  variant = 'primary',
  elevated = false,
  interactive = false,
  onClick,
  className,
  children,
  testId,
  ...props
}) => {
  const cardClasses = clsx(
    styles.card,
    styles[variant],
    {
      [styles.elevated]: elevated,
      [styles.interactive]: interactive,
      [styles.clickable]: onClick,
    },
    className
  );

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  const CardElement = onClick ? 'button' : 'div';

  return (
    <CardElement
      className={cardClasses}
      onClick={onClick ? handleClick : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      data-testid={testId}
      {...props}
    >
      {header && (
        <div className={styles.header}>
          {header}
        </div>
      )}
      
      <div className={styles.content}>
        {children}
      </div>
      
      {footer && (
        <div className={styles.footer}>
          {footer}
        </div>
      )}
    </CardElement>
  );
};

export default Card;