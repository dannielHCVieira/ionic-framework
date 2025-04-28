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
    fill: { control: 'text' },
    expand: { control: 'text' },
    size: { control: 'text' },
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
  render: (props) => <ion-button {...props} />,
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
};
