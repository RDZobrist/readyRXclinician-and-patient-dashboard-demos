import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Use vite-tsconfig-paths to automatically resolve TypeScript path mappings
    config.plugins = config.plugins || [];
    config.plugins.push(
      tsconfigPaths({
        projects: ['../tsconfig.app.json'],
      })
    );
    
    return config;
  },
};

export default config;
