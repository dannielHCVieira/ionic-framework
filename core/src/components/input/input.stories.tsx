import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { closeCircle } from 'ionicons/icons';

import { Input } from './input';

const meta: Meta<Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
      description: 'The color to use from your application\'s color palette',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'time'],
      description: 'The type of control to display',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text to display',
    },
    value: {
      control: 'text',
      description: 'The value of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the user cannot interact with the input',
    },
    readonly: {
      control: 'boolean',
      description: 'If true, the input is read-only',
    },
    clearInput: {
      control: 'boolean',
      description: 'If true, a clear icon will appear when there is a value',
    },
    clearInputIcon: {
      control: 'text',
      description: 'The icon to use for the clear button',
    },
    autocomplete: {
      control: 'select',
      options: ['off', 'on', 'name', 'email', 'username', 'new-password', 'current-password'],
      description: 'Indicates whether the value can be automatically completed by the browser',
    },
    autocorrect: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Whether auto correction should be enabled',
    },
    autofocus: {
      control: 'boolean',
      description: 'Whether the control should have input focus when the page loads',
    },
    clearOnEdit: {
      control: 'boolean',
      description: 'If true, the value will be cleared after focus upon edit',
    },
    counter: {
      control: 'boolean',
      description: 'If true, a character counter will display the ratio of characters used',
    },
    errorText: {
      control: 'text',
      description: 'Text that is placed under the input and displayed when an error is detected',
    },
    helperText: {
      control: 'text',
      description: 'Text that is placed under the input and displayed when no error is detected',
    },
    fill: {
      control: 'select',
      options: ['outline', 'solid'],
      description: 'The fill for the item',
    },
    label: {
      control: 'text',
      description: 'The visible label associated with the input',
    },
    labelPlacement: {
      control: 'select',
      options: ['start', 'end', 'floating', 'stacked', 'fixed'],
      description: 'Where to place the label relative to the input',
    },
    maxlength: {
      control: 'number',
      description: 'The maximum number of characters allowed in the input',
    },
    minlength: {
      control: 'number',
      description: 'The minimum number of characters allowed in the input',
    },
    pattern: {
      control: 'text',
      description: 'A regular expression that the input\'s value is checked against',
    },
    required: {
      control: 'boolean',
      description: 'If true, the input must have a value before the form can be submitted',
    },
    shape: {
      control: 'select',
      options: [undefined, 'round'],
      description: 'The shape of the input',
    },
  },
  args: {
    type: 'text',
    labelPlacement: 'start',
    clearInput: false,
    disabled: false,
    readonly: false,
    required: false,
    autocorrect: 'off',
    autocomplete: 'off',
  },
};

export default meta;

type Story = StoryObj<Input>;

export const Basic: Story = {
  args: {
    placeholder: 'Enter input',
    label: 'Basic Input',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    value: 'Initial value',
    label: 'Input with Value',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const WithClearButton: Story = {
  args: {
    value: 'Clear me',
    clearInput: true,
    label: 'Input with Clear Button',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const CustomClearIcon: Story = {
  args: {
    value: 'Custom clear icon',
    clearInput: true,
    clearInputIcon: closeCircle,
    label: 'Custom Clear Icon',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    value: 'Disabled input',
    disabled: true,
    label: 'Disabled Input',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const Readonly: Story = {
  args: {
    value: 'Read-only input',
    readonly: true,
    label: 'Read-only Input',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    placeholder: 'Enter input',
    helperText: 'This is helper text',
    label: 'Input with Helper Text',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const WithErrorText: Story = {
  args: {
    value: 'Invalid input',
    errorText: 'This is error text',
    label: 'Input with Error Text',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const WithCounter: Story = {
  args: {
    placeholder: 'Type something',
    counter: true,
    maxlength: 20,
    label: 'Input with Counter',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-input {...props}></ion-input>
    </div>
  ),
};

export const DifferentTypes: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-input type="text" label="Text" placeholder="Text input"></ion-input>
      <ion-input type="password" label="Password" placeholder="Password input"></ion-input>
      <ion-input type="email" label="Email" placeholder="Email input"></ion-input>
      <ion-input type="number" label="Number" placeholder="Number input"></ion-input>
      <ion-input type="tel" label="Tel" placeholder="Tel input"></ion-input>
      <ion-input type="url" label="URL" placeholder="URL input"></ion-input>
      <ion-input type="search" label="Search" placeholder="Search input"></ion-input>
      <ion-input type="date" label="Date"></ion-input>
      <ion-input type="time" label="Time"></ion-input>
    </div>
  ),
};

export const LabelPlacements: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-input labelPlacement="start" label="Label Start" placeholder="Placeholder"></ion-input>
      <ion-input labelPlacement="end" label="Label End" placeholder="Placeholder"></ion-input>
      <ion-input labelPlacement="floating" label="Label Floating" placeholder="Placeholder"></ion-input>
      <ion-input labelPlacement="stacked" label="Label Stacked" placeholder="Placeholder"></ion-input>
      <ion-input labelPlacement="fixed" label="Label Fixed (truncates long text...)" placeholder="Placeholder"></ion-input>
    </div>
  ),
};

export const Fills: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-input fill="outline" label="Outline Fill" placeholder="Placeholder"></ion-input>
      <ion-input fill="solid" label="Solid Fill" placeholder="Placeholder"></ion-input>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-input shape="round" fill="solid" label="Round Shape" placeholder="Placeholder"></ion-input>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-input color="primary" label="Primary" placeholder="Primary input"></ion-input>
      <ion-input color="secondary" label="Secondary" placeholder="Secondary input"></ion-input>
      <ion-input color="tertiary" label="Tertiary" placeholder="Tertiary input"></ion-input>
      <ion-input color="success" label="Success" placeholder="Success input"></ion-input>
      <ion-input color="warning" label="Warning" placeholder="Warning input"></ion-input>
      <ion-input color="danger" label="Danger" placeholder="Danger input"></ion-input>
    </div>
  ),
};
