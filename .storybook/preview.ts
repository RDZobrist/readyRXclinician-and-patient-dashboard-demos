import type { Preview } from '@storybook/react-vite';
import '../src/styles/globals.css';
import '../src/styles/accessibility.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    // Healthcare-specific viewport presets
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
        clinicianWorkstation: {
          name: 'Clinician Workstation',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
      },
    },
    // Accessibility testing configuration
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'focus-order-semantics',
            enabled: true,
          },
          {
            id: 'keyboard-navigation',
            enabled: true,
          },
        ],
      },
    },
    // Healthcare theme backgrounds
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
        {
          name: 'healthcare-blue',
          value: '#f0f9ff',
        },
        {
          name: 'clinical-gray',
          value: '#f9fafb',
        },
      ],
    },
  },
  // Organize stories by healthcare categories
  tags: ['autodocs'],
};

export default preview;
