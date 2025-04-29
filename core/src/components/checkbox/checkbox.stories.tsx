import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Checkbox } from './checkbox';

const meta: Meta<Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
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
      description: 'If true, the checkbox is selected',
    },
    indeterminate: {
      control: 'boolean',
      description: 'If true, the checkbox will visually appear as indeterminate',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the user cannot interact with the checkbox',
    },
    errorText: {
      control: 'text',
      description: 'Text that is placed under the checkbox label and displayed when an error is detected',
    },
    helperText: {
      control: 'text',
      description: 'Text that is placed under the checkbox label and displayed when no error is detected',
    },
    labelPlacement: {
      control: 'select',
      options: ['start', 'end', 'fixed', 'stacked'],
      description: 'Where to place the label relative to the checkbox',
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'space-between'],
      description: 'How to pack the label and checkbox within a line',
    },
    alignment: {
      control: 'select',
      options: ['start', 'center'],
      description: 'How to control the alignment of the checkbox and label on the cross axis',
    },
    required: {
      control: 'boolean',
      description: 'If true, screen readers will announce it as a required field',
    },
  },
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    labelPlacement: 'start',
  },
};

export default meta;

type Story = StoryObj<Checkbox>;

export const Default: Story = {
  render: (props) => (
    <div>
      <ion-checkbox {...props}>Default Checkbox</ion-checkbox>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (props) => (
    <div>
      <ion-checkbox {...props}>Checked Checkbox</ion-checkbox>
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  render: (props) => (
    <div>
      <ion-checkbox {...props}>Indeterminate Checkbox</ion-checkbox>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (props) => (
    <div>
      <ion-checkbox {...props}>Disabled Checkbox</ion-checkbox>
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    helperText: 'This is helper text',
  },
  render: (props) => (
    <div>
      <ion-checkbox {...props}>Checkbox with helper text</ion-checkbox>
    </div>
  ),
};

export const WithErrorText: Story = {
  args: {
    errorText: 'This is error text',
  },
  render: (props) => (
    <div>
      <ion-checkbox {...props}>Checkbox with error text</ion-checkbox>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-checkbox labelPlacement="start">Label Start</ion-checkbox>
      <ion-checkbox labelPlacement="end">Label End</ion-checkbox>
      <ion-checkbox labelPlacement="fixed">Label Fixed (truncates long text...)</ion-checkbox>
      <ion-checkbox labelPlacement="stacked">Label Stacked</ion-checkbox>
    </div>
  ),
};

export const JustifyOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <ion-checkbox justify="start">Justify Start</ion-checkbox>
      <ion-checkbox justify="end">Justify End</ion-checkbox>
      <ion-checkbox justify="space-between">Justify Space Between</ion-checkbox>
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <ion-checkbox alignment="start" labelPlacement="stacked">Alignment Start</ion-checkbox>
      <ion-checkbox alignment="center" labelPlacement="stacked">Alignment Center</ion-checkbox>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-checkbox color="primary" checked>Primary</ion-checkbox>
      <ion-checkbox color="secondary" checked>Secondary</ion-checkbox>
      <ion-checkbox color="tertiary" checked>Tertiary</ion-checkbox>
      <ion-checkbox color="success" checked>Success</ion-checkbox>
      <ion-checkbox color="warning" checked>Warning</ion-checkbox>
      <ion-checkbox color="danger" checked>Danger</ion-checkbox>
    </div>
  ),
};
