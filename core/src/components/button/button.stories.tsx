import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: {
      control: 'select',
      options: ['solid', 'outline', 'clear']
    },
    expand: {
      control: 'select',
      options: ['full', 'block']
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large']
    },
  },
  args: { fill: 'outline', expand: 'full', size: 'small' },
};

export default meta;

type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    fill: 'outline',
    expand: 'full',
    size: 'small',
  },
  render: (props) => <ion-button {...props}>Primary Button</ion-button>,
};

/**
 * Storybook story without custom render function
 */
export const Secondary: Story = {
  args: {
    fill: 'solid',
    expand: 'block',
    size: 'large',
  },
  render: (props) => <ion-button {...props}>Secondary Button</ion-button>,
};
