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
    backdropDismiss: true,
    animated: true,
    isOpen: false,
  },
};

export default meta;

type Story = StoryObj<Alert>;

/**
 * Basic inline alert example as shown in the documentation
 */
export const InlineAlert: Story = {
  args: {
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK'],
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-alert"></ion-alert>
      <ion-button id="open-alert">Show Alert</ion-button>
    </div>
  )
};

/**
 * Example of using isOpen property to control the alert state
 */
export const UsingIsOpen: Story = {
  args: {
    header: 'Alert',
    message: 'This is an alert message controlled by isOpen.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          console.log('Alert dismissed');
          // Note: In a real application, you would set isOpen to false here
        }
      }
    ],
    isOpen: true
  },
  render: () => {
    return (
      <div>
        <ion-button onClick={() => {
          const alert = document.querySelector('ion-alert')!
          alert.isOpen = true
        }}>Click Me</ion-button>
        <ion-alert
          buttons={['Action']}
          header="A Short Title Is Best"
          sub-header="A Sub Header Is Optional"
          message="A message should be a short, complete sentence."
          overlayIndex={1000}
          onIonAlertDidDismiss={function () {
            console.log('Alert dismissed');
            const alert = document.querySelector('ion-alert')!
            alert.isOpen = false;
          }}
        ></ion-alert>
      </div>
    )
  }
};

/**
 * Example with multiple buttons, matching the documentation example
 */
export const ButtonsExample: Story = {
  args: {
    header: 'Alert',
    message: 'This is an alert with multiple buttons and button handlers.',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Open Modal',
        handler: () => {
          console.log('Open Modal clicked');
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }
    ]
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-buttons-alert"></ion-alert>
      <ion-button id="open-buttons-alert">Show Alert with Buttons</ion-button>
      <p>Check the console to see button handler messages.</p>
    </div>
  )
};

/**
 * Example with text inputs, similar to the Text Inputs Example in documentation
 */
export const TextInputsExample: Story = {
  args: {
    header: 'Please enter your info',

    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: (data) => {
          console.log('OK clicked, data:', data);
        }
      }
    ],

    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Name',
      },
      {
        name: 'nickname',
        type: 'text',
        id: 'nickname-input',
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8,
        },
      },
      {
        name: 'age',
        type: 'number',
        placeholder: 'Age',
        min: 1,
        max: 100,
      },
      {
        name: 'about',
        id: 'about-input',
        type: 'textarea',
        placeholder: 'A little about yourself',
      }
    ],

    translucent: true
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-text-inputs-alert"></ion-alert>
      <ion-button id="open-text-inputs-alert">Show Text Inputs Alert</ion-button>
      <p>Check the console to see form data on submit.</p>
    </div>
  )
};

/**
 * Example with radio buttons, matching the Radio Example in documentation
 */
export const RadioExample: Story = {
  args: {
    header: 'Radio',
    inputs: [
      {
        name: 'radio1',
        type: 'radio',
        label: 'Radio 1',
        value: 'value1',
        checked: true
      },
      {
        name: 'radio2',
        type: 'radio',
        label: 'Radio 2',
        value: 'value2'
      },
      {
        name: 'radio3',
        type: 'radio',
        label: 'Radio 3',
        value: 'value3'
      },
      {
        name: 'radio4',
        type: 'radio',
        label: 'Radio 4',
        value: 'value4'
      },
      {
        name: 'radio5',
        type: 'radio',
        label: 'Radio 5',
        value: 'value5'
      },
      {
        name: 'radio6',
        type: 'radio',
        label: 'Radio 6 Radio 6 Radio 6',
        value: 'value6'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: (data) => {
          console.log('OK clicked, data:', data);
        }
      }
    ]
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-radio-alert"></ion-alert>
      <ion-button id="open-radio-alert">Show Radio Alert</ion-button>
      <p>Check the console to see selected option on submit.</p>
    </div>
  )
};

/**
 * Example with checkbox inputs
 */
export const CheckboxExample: Story = {
  args: {
    header: 'Checkbox',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        checked: true
      },
      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2'
      },
      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'value3'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: (data) => {
          console.log('OK clicked, data:', data);
        }
      }
    ]
  },
  render: (props) => (
    <div>
      <ion-alert {...props} trigger="open-checkbox-alert"></ion-alert>
      <ion-button id="open-checkbox-alert">Show Checkbox Alert</ion-button>
      <p>Check the console to see selected options on submit.</p>
    </div>
  )
};

/**
 * Example showing customization with CSS classes
 */
export const CustomizationExample: Story = {
  args: {
    header: 'Custom Alert',
    subHeader: 'Customized using CSS classes',
    message: 'This alert demonstrates customization capabilities using CSS custom properties.',
    buttons: ['Dismiss'],
    cssClass: 'my-custom-alert'
  },
  render: (props) => (
    <div>
      <style>{`
        .my-custom-alert {
          --background: #f8f8f8;
          --max-width: 400px;
        }

        .my-custom-alert .alert-wrapper {
          border-radius: 15px;
        }

        .my-custom-alert .alert-head {
          color: #4d8cf4;
        }
      `}</style>
      <ion-alert {...props} trigger="open-custom-alert"></ion-alert>
      <ion-button id="open-custom-alert">Show Customized Alert</ion-button>
      <p>This example shows how to customize an alert using CSS properties.</p>
    </div>
  )
};
