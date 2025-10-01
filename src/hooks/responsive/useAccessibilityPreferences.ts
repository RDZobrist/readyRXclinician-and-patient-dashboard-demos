import { useMediaQuery } from './useMediaQuery';

/**
 * Accessibility and User Preference Hooks
 * 
 * Hooks for detecting user accessibility preferences and system settings.
 * Essential for healthcare applications to meet accessibility standards.
 */

/**
 * Detects if user prefers reduced motion
 * Important for healthcare apps to avoid triggering vestibular disorders
 */
export const usePrefersReducedMotion = () => 
  useMediaQuery('(prefers-reduced-motion: reduce)');

/**
 * Detects if user prefers dark color scheme
 * Useful for healthcare professionals working in low-light environments
 */
export const usePrefersDarkMode = () => 
  useMediaQuery('(prefers-color-scheme: dark)');

/**
 * Detects if user prefers high contrast
 * Critical for users with visual impairments
 */
export const usePrefersHighContrast = () => 
  useMediaQuery('(prefers-contrast: high)');

/**
 * detects touch-capable devices on mobile devices
 * 
 */
export const useIsTouchDevice = () => 
  useMediaQuery('(hover: none) and (pointer: coarse)');

/**
 * detects device orientation
 * 
 *  */
export const useIsPortrait = () => 
  useMediaQuery('(orientation: portrait)');

export const useIsLandscape = () => 
  useMediaQuery('(orientation: landscape)');

/**
 * Combined accessibility preferences hook
 * Returns an object with all accessibility preferences
 * 
 * @example
 * ```tsx
 * const { 
 *   prefersReducedMotion, 
 *   prefersDarkMode, 
 *   prefersHighContrast 
 * } = useAccessibilityPreferences();
 * 
 * return (
 *   <div className={clsx({
 *     'high-contrast': prefersHighContrast,
 *     'dark-mode': prefersDarkMode,
 *     'reduced-motion': prefersReducedMotion
 *   })}>
 *     {content}
 *   </div>
 * );
 * ```
 */
export const useAccessibilityPreferences = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersDarkMode = usePrefersDarkMode();
  const prefersHighContrast = usePrefersHighContrast();
  const isTouchDevice = useIsTouchDevice();
  const isPortrait = useIsPortrait();
  const isLandscape = useIsLandscape();

  return {
    prefersReducedMotion,
    prefersDarkMode,
    prefersHighContrast,
    isTouchDevice,
    isPortrait,
    isLandscape
  };
};
