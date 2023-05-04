
import { Preview } from '@storybook/react';
import './_stories-styles.scss';
import ThemeProvider from '../src/components/ThemeProvider/ThemeProvider';
import CssBaseLine from '../src/components/CssBaseLine/CssBaseLine';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <CssBaseLine />
        <div className="story-wrap">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;