import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Badge } from './badge';

const meta: Meta<Badge & { text: string }> = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
    },
    text: {
      control: 'text',
    },
  },
  args: {
    text: 'NEW',
  },
};

export default meta;

type Story = StoryObj<Badge & { text: string }>;

export const Primary: Story = {
  render: (props) => (
    <div>
      <ion-badge {...props}>{props.text}</ion-badge>
    </div>
  ),
};
