/**
 * Responsive Hooks for Healthcare Dashboard
 * 
 * Comprehensive collection of hooks for responsive behavior,
 * accessibility preferences, and breakpoint management.
 */

// Core responsive hooks
export { useMediaQuery } from './useMediaQuery';
export { 
  useBreakpoint,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsLargeDesktop,
  useIsSmallMobile,
  useIsLargeMobile,
  type Breakpoint
} from './useBreakpoints';

// Responsive value hooks
export { 
  useResponsiveValue,
  useResponsiveChartHeight,
  useResponsiveGridColumns,
  useResponsiveItemsPerPage,
  useResponsiveSidebarWidth,
  type ResponsiveValues
} from './useResponsiveValue';

// Accessibility and user preference hooks
export {
  usePrefersReducedMotion,
  usePrefersDarkMode,
  usePrefersHighContrast,
  useIsTouchDevice,
  useIsPortrait,
  useIsLandscape,
  useAccessibilityPreferences
} from './useAccessibilityPreferences';
