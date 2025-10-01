import { useBreakpoint, type Breakpoint } from './useBreakpoints';

/**
 * useResponsiveValue Hook
 * 
 * Returns different values based on current breakpoint.
 * Essential for responsive healthcare dashboard components.
 * 
 * @param values - Object with breakpoint keys and corresponding values
 * @returns value for current breakpoint
 * 
 * @example
 * ```tsx
 * const columns = useResponsiveValue({
 *   mobile: 1,
 *   tablet: 2,
 *   desktop: 3,
 *   'large-desktop': 4
 * });
 * 
 * const chartHeight = useResponsiveValue({
 *   mobile: 200,
 *   tablet: 300,
 *   desktop: 400,
 *   'large-desktop': 500
 * });
 * 
 * const labResultsPerPage = useResponsiveValue({
 *   mobile: 5,
 *   tablet: 10,
 *   desktop: 15,
 *   'large-desktop': 20
 * });
 * ```
 */

export interface ResponsiveValues<T> {
  mobile: T;
  tablet?: T;
  desktop?: T;
  'large-desktop'?: T;
}

export const useResponsiveValue = <T>(values: ResponsiveValues<T>): T => {
  const breakpoint = useBreakpoint();
  
  // Return exact match if available
  if (values[breakpoint] !== undefined) {
    return values[breakpoint]!;
  }
  
  // Fallback logic - use closest smaller breakpoint
  switch (breakpoint) {
    case 'large-desktop':
      return values.desktop ?? values.tablet ?? values.mobile;
    case 'desktop':
      return values.tablet ?? values.mobile;
    case 'tablet':
      return values.mobile;
    default:
      return values.mobile;
  }
};

/**
 * Predefined responsive values for common healthcare dashboard patterns
 */

// Chart heights for different screen sizes
export const useResponsiveChartHeight = () => 
  useResponsiveValue({
    mobile: 200,
    tablet: 300,
    desktop: 400,
    'large-desktop': 500
  });

// Grid columns for lab results and patient cards
export const useResponsiveGridColumns = () => 
  useResponsiveValue({
    mobile: 1,
    tablet: 2,
    desktop: 3,
    'large-desktop': 4
  });

// Items per page for tables and lists
export const useResponsiveItemsPerPage = () => 
  useResponsiveValue({
    mobile: 5,
    tablet: 10,
    desktop: 15,
    'large-desktop': 20
  });

// Sidebar width for dashboard layouts
export const useResponsiveSidebarWidth = () => 
  useResponsiveValue({
    mobile: '100%',
    tablet: '280px',
    desktop: '320px',
    'large-desktop': '360px'
  });

export default useResponsiveValue;
