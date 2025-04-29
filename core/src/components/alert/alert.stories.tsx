import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Alert } from './alert';

const meta: Meta<Alert> = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    header: {
      control: 'text',
      description: 'The main title in the heading of the alert',
    },
    subHeader: {
      control: 'text',
      description: 'The subtitle in the heading of the alert. Displayed under the title',
    },
    message: {
      control: 'text',
      description: 'The main message to be displayed in the alert',
    },
    buttons: {
      control: 'object',
      description: 'Array of buttons to be added to the alert',
    },
    inputs: {
      control: 'object',
      description: 'Array of inputs to show in the alert',
    },
    cssClass: {
      control: 'text',
      description: 'Additional classes to apply for custom CSS',
    },
    backdropDismiss: {
      control: 'boolean',
      description: 'If true, the alert will be dismissed when the backdrop is clicked',
    },
    translucent: {
      control: 'boolean',
      description: 'If true, the alert will be translucent in iOS mode',
    },
    animated: {
      control: 'boolean',
      description: 'If true, the alert will animate',
    },
    isOpen: {
      control: 'boolean',
      description: 'If true, the alert will open. If false, the alert will close',
    },
  },
  args: {
    header: 'Alert',
    message: 'This is an alert message.',
    buttons: ['OK'],
    backdropDismiss: true,
    animated: true,
    isOpen: false,
  },
};

export default meta;

type Story = StoryObj<Alert>;

export const Basic: Story = {
  args: {
    message: "Hello World!"
  },

  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-alert"></ion-alert>
      <ion-button id="open-alert">Show Alert</ion-button>
    </div>
  )
};

export const WithInputs: Story = {
  args: {
    header: 'Login',
    inputs: [
      {
        name: 'username',
        type: 'text',
        placeholder: 'Username',
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Login',
      },
    ],
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-input-alert"></ion-alert>
      <ion-button id="open-input-alert">Show Login Alert</ion-button>
    </div>
  ),
};

export const WithRadioButtons: Story = {
  args: {
    header: 'Select an Option',
    inputs: [
      {
        name: 'option',
        type: 'radio',
        label: 'Option 1',
        value: 'option1',
        checked: true,
      },
      {
        name: 'option',
        type: 'radio',
        label: 'Option 2',
        value: 'option2',
      },
      {
        name: 'option',
        type: 'radio',
        label: 'Option 3',
        value: 'option3',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Confirm',
      },
    ],
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-radio-alert"></ion-alert>
      <ion-button id="open-radio-alert">Show Radio Alert</ion-button>
    </div>
  ),
};

export const WithCheckboxes: Story = {
  args: {
    header: 'Select Options',
    inputs: [
      {
        name: 'option1',
        type: 'checkbox',
        label: 'Option 1',
        value: 'option1',
        checked: true,
      },
      {
        name: 'option2',
        type: 'checkbox',
        label: 'Option 2',
        value: 'option2',
      },
      {
        name: 'option3',
        type: 'checkbox',
        label: 'Option 3',
        value: 'option3',
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Confirm',
      },
    ],
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-checkbox-alert"></ion-alert>
      <ion-button id="open-checkbox-alert">Show Checkbox Alert</ion-button>
    </div>
  ),
};

export const WithMultipleButtons: Story = {
  args: {
    header: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
      },
      {
        text: 'Delete',
        role: 'destructive',
      },
      {
        text: 'OK',
      },
    ],
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-buttons-alert"></ion-alert>
      <ion-button id="open-buttons-alert">Show Multi-Button Alert</ion-button>
    </div>
  ),
};
