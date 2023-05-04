import type { StorybookConfig } from "@storybook/react-vite";
import svgr from 'vite-plugin-svgr'
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(viteConfig, options) {
    viteConfig.plugins.push(svgr())
    return viteConfig;
  },
};
export default config;
