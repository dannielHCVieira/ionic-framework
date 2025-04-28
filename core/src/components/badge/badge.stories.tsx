import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Badge } from './badge';

const meta: Meta<Badge> = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<Badge>;

export const Primary: Story = {
  render: (props) => <ion-badge {...props} />,
};

/**
 * Storybook story without custom render function
 */
export const Secondary: Story = {

};
