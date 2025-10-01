# Ready RX Healthcare Dashboard

> **A modern, accessible healthcare dashboard built with React, TypeScript, and Vite**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3.3-646CFF.svg)](https://vitejs.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-8.6.14-FF4785.svg)](https://storybook.js.org/)

A comprehensive healthcare dashboard showcasing patient lab results, trend analysis, and medical data visualization. Built as a component library with healthcare-focused UX, accessibility compliance, and responsive design.

## Features

### Core Dashboard Functionality
- **Patient Management**: Multi-patient selection with role-based access (Clinician/Patient views)
- **Lab Results Display**: Comprehensive lab results table with filtering and date selection
- **Trend Visualization**: Interactive charts showing biomarker trends over time using Recharts
- **Medical Tooltips**: Educational tooltips explaining medical terminology and biomarkers
- **Health Suggestions**: AI-powered personalized health recommendations with proper disclaimers

### Component Library
- **Base UI Components**: Card, Button, Badge, Table, Loading, Tooltip, and more
- **Healthcare Components**: LabResultCard, TrendChart, PatientSummary, MedicalTooltip
- **Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation

### Technical Excellence
- **TypeScript**: Full type safety with comprehensive interfaces
- **CSS Modules**: Component-scoped styling with design token system
- **Storybook**: Complete component documentation and testing
- **Healthcare UX**: Medical workflow optimization and patient safety considerations

## Quick Start Guide

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (or yarn/pnpm equivalent)

### Installation Guide


#### 1. **Clone the repository**
```bash

git clone https://github.com/RDZobrist/readyRXclinician-and-patient-dashboard-demos.git
cd readyRXclinician-and-patient-dashboard-demos
```
# Install all project dependencies
npm install

# Verify installation
npm list --depth=0

# Start main dashboard application
npm run dev

# Application will be available at:
# http://localhost:5173

# In a new terminal window/tab
npm run storybook

# Storybook will be available at:
# http://localhost:6006