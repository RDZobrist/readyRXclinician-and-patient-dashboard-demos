import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import type { LabStatus, LabResultStatus } from './labResults';
import type { AlertLevel, UserRole } from './patient';

/**
 * Base component props
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  testId?: string;
}

/**
 * Size and variant types
 */
export type ComponentSize = 'sm' | 'md' | 'lg';

export type ComponentVariant = 
  | 'primary' 
  | 'secondary' 
  | 'critical' 
  | 'warning' 
  | 'normal'
  | 'clinician'
  | 'admin'
  | 'patient';

/**
 * Loading and error states
 */
export interface LoadingState {
  isLoading: boolean;
  loadingText?: string;
}


export interface LoadingProps extends BaseComponentProps {
    type?: 'spinner' | 'skeleton' | 'dots';
    size?: ComponentSize;
    text?: string;
  }
export interface ErrorState {
  hasError: boolean;
  errorMessage?: string;
  retry?: () => void;
}

/**
 * Button component props
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ComponentVariant;
  size?: ComponentSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  testId?: string;
  loadingText?: string;
  
}
/**
 * Chart component props
 */
export interface ChartProps extends BaseComponentProps {
    data: any[];
    width?: number;
    height?: number;
    loading?: boolean;
    error?: string;
  }
  
  export interface TrendChartProps extends BaseComponentProps {
    data: any; // TrendData type
    height?: number;
    showGrid?: boolean;
    showLegend?: boolean;
    showReferenceLines?: boolean;
  }

/**
 * Card component props
 */
export interface CardProps extends BaseComponentProps {
  header?: ReactNode;
  footer?: ReactNode;
  variant?: ComponentVariant;
  elevated?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

export interface BadgeProps extends BaseComponentProps {
  variant?: ComponentVariant | LabResultStatus;
  size?: ComponentSize;
  pulse?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}


export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  size?: ComponentSize;
  isRequired?: boolean;
  isInvalid?: boolean;
}

export interface TableColumn<T = any> {
  key: keyof T | string;
  header: string;
  accessor?: (item: T) => ReactNode;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T = any> extends BaseComponentProps {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
}


export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ComponentSize;
}


export interface AlertProps extends BaseComponentProps {
  variant?: AlertLevel;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}


export interface ChartProps extends BaseComponentProps {
  data: any[];
  width?: number;
  height?: number;
  loading?: boolean;
  error?: string;
}


export interface NavigationItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  badge?: number;
}

export interface SidebarProps extends BaseComponentProps {
  items: NavigationItem[];
  userRole?: UserRole;
  patientName?: string;
}

export interface BottomTabsProps extends BaseComponentProps {
  items: NavigationItem[];
  activeItem: string;
  onItemChange: (itemId: string) => void;
}

export interface MetricCardProps extends BaseComponentProps {
  title: string;
  value: string | number;
  unit?: string;
  status?: LabStatus;
  trend?: {
    direction: 'up' | 'down' | 'stable';
    percentage?: number;
  };
  onClick?: () => void;
}

export interface DashboardLayoutProps extends BaseComponentProps {
  sidebar?: ReactNode;
  header?: ReactNode;
  bottomTabs?: ReactNode;
  userRole?: UserRole;
  isMobile?: boolean;
}

export interface ThemeContextProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export interface ResponsiveProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export type ComponentProps = BaseComponentProps & 
  Partial<LoadingState> & 
  Partial<ErrorState>;
