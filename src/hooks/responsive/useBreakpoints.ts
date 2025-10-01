import { useMediaQuery } from './useMediaQuery';

/**
 * Breakpoint Hooks for Healthcare Dashboard
 * 
 * Predefined breakpoint hooks for common responsive patterns.
 * These match the healthcare dashboard design tokens.
 */

// Mobile-first breakpoints (matching healthcare dashboard design tokens)
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const useIsLargeDesktop = () => useMediaQuery('(min-width: 1280px)');

// Specific healthcare dashboard breakpoints
export const useIsSmallMobile = () => useMediaQuery('(max-width: 480px)');
export const useIsLargeMobile = () => useMediaQuery('(min-width: 481px) and (max-width: 767px)');

/**
 * useBreakpoint Hook
 * 
 * Returns the current breakpoint name for conditional rendering
 * 
 * @returns string representing current breakpoint
 * 
 * @example
 * ```tsx
 * const breakpoint = useBreakpoint();
 * 
 * const getColumnsForBreakpoint = () => {
 *   switch (breakpoint) {
 *     case 'mobile': return 1;
 *     case 'tablet': return 2;
 *     case 'desktop': return 3;
 *     default: return 4;
 *   }
 * };
 * ```
 */
export const useBreakpoint = (): 'mobile' | 'tablet' | 'desktop' | 'large-desktop' => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isLargeDesktop = useIsLargeDesktop();

  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';
  if (isLargeDesktop) return 'large-desktop';
  if (isDesktop) return 'desktop';
  
  // Fallback
  return 'desktop';
};

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large-desktop';
