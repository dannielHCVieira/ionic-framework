const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-toolbars",
  ],
  framework: {
    name: "@stencil/storybook-plugin"
  },
};

export default config;
