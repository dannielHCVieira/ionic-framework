import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Toggle } from './toggle';

const meta: Meta<Toggle> = {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
      description: 'The color to use from your application\'s color palette',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the toggle is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the user cannot interact with the toggle',
    },
    errorText: {
      control: 'text',
      description: 'Text that is placed under the toggle label and displayed when an error is detected',
    },
    helperText: {
      control: 'text',
      description: 'Text that is placed under the toggle label and displayed when no error is detected',
    },
    enableOnOffLabels: {
      control: 'boolean',
      description: 'Enables the on/off accessibility switch labels within the toggle',
    },
    labelPlacement: {
      control: 'select',
      options: ['start', 'end', 'fixed', 'stacked'],
      description: 'Where to place the label relative to the input',
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'space-between'],
      description: 'How to pack the label and toggle within a line',
    },
    alignment: {
      control: 'select',
      options: ['start', 'center'],
      description: 'How to control the alignment of the toggle and label on the cross axis',
    },
    required: {
      control: 'boolean',
      description: 'If true, screen readers will announce it as a required field',
    },
  },
  args: {
    checked: false,
    disabled: false,
    labelPlacement: 'start',
  },
};

export default meta;

type Story = StoryObj<Toggle>;

export const Default: Story = {
  render: (props) => (
    <div>
      <ion-toggle {...props}>Toggle label</ion-toggle>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (props) => (
    <div>
      <ion-toggle {...props}>Checked toggle</ion-toggle>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (props) => (
    <div>
      <ion-toggle {...props}>Disabled toggle</ion-toggle>
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    helperText: 'This is helper text',
  },
  render: (props) => (
    <div>
      <ion-toggle {...props}>Toggle with helper text</ion-toggle>
    </div>
  ),
};

export const WithErrorText: Story = {
  args: {
    errorText: 'This is error text',
  },
  render: (props) => (
    <div>
      <ion-toggle {...props}>Toggle with error text</ion-toggle>
    </div>
  ),
};

export const WithOnOffLabels: Story = {
  args: {
    enableOnOffLabels: true,
  },
  render: (props) => (
    <div>
      <ion-toggle {...props}>Toggle with on/off labels</ion-toggle>
    </div>
  ),
};

export const DifferentLabelPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <link rel="stylesheet" href="/css/core.css" />
      <ion-toggle labelPlacement="start">Label Start</ion-toggle>
      <ion-toggle labelPlacement="end">Label End</ion-toggle>
      <ion-toggle labelPlacement="fixed">Label Fixed (truncates long text...)</ion-toggle>
      <ion-toggle labelPlacement="stacked">Label Stacked</ion-toggle>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <link rel="stylesheet" href="/css/core.css" />
      <ion-toggle color="primary" checked>Primary</ion-toggle>
      <ion-toggle color="secondary" checked>Secondary</ion-toggle>
      <ion-toggle color="tertiary" checked>Tertiary</ion-toggle>
      <ion-toggle color="success" checked>Success</ion-toggle>
      <ion-toggle color="warning" checked>Warning</ion-toggle>
      <ion-toggle color="danger" checked>Danger</ion-toggle>
    </div>
  ),
};
