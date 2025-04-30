import type { Preview } from '@stencil/storybook-plugin'

/**
 * make sure all components are loaded
 */
import { defineCustomElements } from '../loader/index.js'
// @ts-expect-error no types for this file
import { initialize } from '../components/index.js'

defineCustomElements()

export const globalTypes: Preview['globalTypes'] = {
  mode: {
    name: 'Mode',
    description: 'Ionic component mode',
    defaultValue: 'md',
    toolbar: {
      icon: 'mobile',
      items: [
        { value: 'ios', right: '📱', title: 'iOS' },
        { value: 'md', right: '🤖', title: 'Material Design' },
      ],
      showName: true,
    },
  },
}

const withMode = (Story, context) => {
  // Set the mode based on the global arg value
  initialize({ mode: context.globals.mode })

  // Return the story without any wrapper
  return Story()
}

export const decorators: Preview['decorators'] = [withMode]

// Default parameters that apply to all stories
export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}
