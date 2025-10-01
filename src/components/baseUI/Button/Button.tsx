import React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from '@/types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText = 'Loading...',
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  disabled,
  testId,
  ...props
}) => {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.loading]: isLoading,
      [styles.fullWidth]: fullWidth,
      [styles.disabled]: disabled || isLoading,
    },
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      data-testid={testId}
      {...props}
    >
      {isLoading ? (
        <>
          <span className={styles.spinner} aria-hidden="true" />
          <span className={styles.loadingText}>{loadingText}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
          <span className={styles.buttonText}>{children}</span>
          {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
