import React, { useState, useMemo, ReactNode } from 'react';
import clsx from 'clsx';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import type { TableColumn, SortDirection } from '@/types';
import { TableSkeletonLoader } from '@/components/baseUI/Loading';
import { ErrorBoundary } from '@/components/baseUI/ErrorBoundary';
import styles from './Table.module.css';

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  error?: string;
  caption?: string;
  className?: string;
  testId?: string;
}

export function Table<T extends { id: string | number }>({ 
  columns,
  data,
  isLoading = false,
  error,
  caption,
  className,
  testId = 'table',
}: TableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (key: keyof T | string) => {
    if (sortColumn === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn as keyof T];
      const bValue = b[sortColumn as keyof T];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  return (
    <ErrorBoundary testId={`${testId}-error-boundary`}>
      <div className={clsx(styles.tableContainer, className)} data-testid={testId}>
        <table
          className={styles.table}
          role="table"
          aria-label={caption || "Data table"}
          aria-describedby={caption ? `${testId}-caption` : undefined}
        >
          {caption && (
            <caption 
              className={styles.caption}
              id={`${testId}-caption`}
            >
              {caption}
            </caption>
          )}
          <thead className={styles.thead}>
            <tr className={styles.headerRow}>
              {columns.map((col) => (
                <th
                  key={col.key as string}
                  className={clsx(styles.th, {
                    [styles.sortable]: col.sortable,
                    [styles.sorted]: sortColumn === col.key,
                  })}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                  role={col.sortable ? "columnheader button" : "columnheader"}
                  tabIndex={col.sortable ? 0 : -1}
                  aria-sort={
                    sortColumn === col.key 
                      ? sortDirection === 'asc' 
                        ? 'ascending' 
                        : 'descending'
                      : col.sortable 
                        ? 'none' 
                        : undefined
                  }
                  aria-label={
                    col.sortable 
                      ? `${col.header}, sortable column${sortColumn === col.key ? `, currently sorted ${sortDirection === 'asc' ? 'ascending' : 'descending'}` : ''}`
                      : col.header
                  }
                  onKeyDown={col.sortable ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSort(col.key);
                    }
                  } : undefined}
                >
                  <div className={styles.headerContent}>
                    {col.header}
                    {col.sortable && (
                      <span 
                        className={styles.sortIcon}
                        aria-hidden="true"
                      >
                        {sortColumn === col.key ? (
                          sortDirection === 'asc' ? (
                            <ChevronUpIcon width={16} />
                          ) : (
                            <ChevronDownIcon width={16} />
                          )
                        ) : (
                          <ChevronUpIcon width={16} className={styles.inactiveIcon} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
          {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <tr key={`skeleton-${index}`}>
                  {columns.map((col, colIndex) => (
                    <td key={`skeleton-${index}-${colIndex}`} style={{ padding: '0.75rem 1rem' }}>
                      <div 
                        style={{
                          height: '1rem',
                          background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
                          backgroundSize: '200% 100%',
                          borderRadius: '0.25rem',
                          animation: 'shimmer 1.5s infinite',
                          width: colIndex === 0 ? '80%' : colIndex === 1 ? '60%' : colIndex === 2 ? '90%' : colIndex === 3 ? '50%' : '70%'
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))
            ) : error ? (
              <tr className={styles.errorRow}>
                <td colSpan={columns.length} role="alert">
                  {error}
                </td>
              </tr>
            ) : sortedData.length === 0 ? (
              <tr className={styles.emptyRow}>
                <td colSpan={columns.length}>
                  No data available
                </td>
              </tr>
            ) : (
              sortedData.map((item) => (
                <tr key={item.id} className={styles.tr}>
                  {columns.map((col) => (
                    <td key={col.key as string} className={styles.td}>
                      {col.accessor ? col.accessor(item) : (item[col.key as keyof T] as ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </ErrorBoundary>
  );
}

export default Table;
