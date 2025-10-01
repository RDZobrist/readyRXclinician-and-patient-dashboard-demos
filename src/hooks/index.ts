/**
 * Healthcare Dashboard Hooks
 * 
 * Central export point for all custom hooks used throughout
 * the Ready RX healthcare dashboard application.
 */

// Responsive and accessibility hooks
export * from './responsive';

// Data management hooks
export { usePatient } from './usePatient';
export { useLabResults } from './useLabResults';

// Future hooks can be added here:
// export { useTrendData } from './useTrendData';
// export { useLocalStorage } from './useLocalStorage';
// export { useDebounce } from './useDebounce';
// export { useAsync } from './useAsync';
