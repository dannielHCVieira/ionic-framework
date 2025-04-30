import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { ActionSheet } from './action-sheet';

const meta: Meta<ActionSheet> = {
  title: 'Action Sheet',
  component: ActionSheet,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    header: {
      control: 'text',
      description: 'Title for the action sheet',
    },
    subHeader: {
      control: 'text',
      description: 'Subtitle for the action sheet',
    },
    buttons: {
      control: 'object',
      description: 'An array of buttons for the action sheet',
    },
    backdropDismiss: {
      control: 'boolean',
      description: 'If true, the action sheet will be dismissed when the backdrop is clicked',
    },
    translucent: {
      control: 'boolean',
      description: 'If true, the action sheet will be translucent in iOS mode',
    },
    animated: {
      control: 'boolean',
      description: 'If true, the action sheet will animate',
    },
    cssClass: {
      control: 'text',
      description: 'Additional classes to apply for custom CSS',
    },
    isOpen: {
      control: 'boolean',
      description: 'If true, the action sheet will open. If false, the action sheet will close',
    },
  },
  args: {
    backdropDismiss: true,
    animated: true,
    isOpen: false,
  },
};

export default meta;

type Story = StoryObj<ActionSheet>;

/**
 * Basic inline action sheet example as shown in the documentation
 */
export const InlineActionSheet: Story = {
  args: {
    header: 'Actions',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Share',
        data: {
          action: 'share',
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ],
  },
  render: (props) => (
    <div>
      <ion-action-sheet {...props} trigger="open-action-sheet"></ion-action-sheet>
      <ion-button id="open-action-sheet">Show Action Sheet</ion-button>
    </div>
  )
};

/**
 * Example of using isOpen property to control the action sheet state
 */
export const UsingIsOpen: Story = {
  args: {
    header: 'Actions',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Share',
        data: {
          action: 'share',
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ],
    isOpen: true
  },
  render: () => {
    return (
      <div>
        <ion-button onClick={() => {
          const actionSheet = document.querySelector('ion-action-sheet')!
          actionSheet.isOpen = true
        }}>Click Me</ion-button>
        <ion-action-sheet
          overlayIndex={1000}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              data: {
                action: 'delete',
              },
            },
            {
              text: 'Share',
              data: {
                action: 'share',
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              data: {
                action: 'cancel',
              },
            },
          ]}
          header="Actions"
          onIonActionSheetDidDismiss={() => {
            console.log('Action Sheet dismissed');
            const actionSheet = document.querySelector('ion-action-sheet')!
            actionSheet.isOpen = false;
          }}
        ></ion-action-sheet>
      </div>
    )
  }
};

/**
 * Example with role buttons, showing destructive and cancel roles
 */
export const ButtonsWithRoles: Story = {
  args: {
    header: 'Actions',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Share',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Play',
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  },
  render: (props) => (
    <div>
      <ion-action-sheet {...props} trigger="open-buttons-action-sheet"></ion-action-sheet>
      <ion-button id="open-buttons-action-sheet">Show Action Sheet with Roles</ion-button>
      <p>Check the console to see button handler messages.</p>
    </div>
  )
};

/**
 * Example with icons and handler functions
 */
export const WithIcons: Story = {
  args: {
    header: 'Albums',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Play',
        icon: 'play-circle',
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  },
  render: (props) => (
    <div>
      <ion-action-sheet {...props} trigger="open-icons-action-sheet"></ion-action-sheet>
      <ion-button id="open-icons-action-sheet">Show Action Sheet with Icons</ion-button>
    </div>
  )
};

/**
 * Example showing how to collect data from action sheet dismissal
 */
export const CollectingDismissData: Story = {
  args: {
    header: 'Actions',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        data: {
          action: 'delete'
        }
      },
      {
        text: 'Share',
        data: {
          action: 'share'
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel'
        }
      }
    ]
  },
  render: (props) => (
    <div>
      <ion-action-sheet
        {...props}
        trigger="open-data-action-sheet"
        onIonActionSheetDidDismiss={(e) => {
          const { data, role } = e.detail;
          console.log(`Dismissed with role: ${role}, data: ${JSON.stringify(data)}`);
        }}
      ></ion-action-sheet>
      <ion-button id="open-data-action-sheet">Show Action Sheet with Data</ion-button>
      <p>Check the console to see dismiss data.</p>
    </div>
  )
};

/**
 * Example with custom CSS class for styling
 */
export const WithCustomStyling: Story = {
  args: {
    overlayIndex: 1000,
    trigger: 'open-action-sheet',
    header: 'Example header',
    subHeader: 'Example subheader',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Share',
        data: {
          action: 'share',
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ],
    translucent: false
  },
  render: (props) => (
    <div>
      <style>
        {`
          ion-action-sheet.my-custom-class {
            --background: #f58840;
            --backdrop-opacity: 0.6;
            --button-background-selected: #e97223;
            --button-color: #000000;
            --color: #fff;
            /* role: "destructive" button iOS styling override */
            --ion-color-danger: #000000;
          }
        `}
      </style>
      <ion-button id="open-action-sheet">Open</ion-button>
      <ion-action-sheet class="my-custom-class" {...props}></ion-action-sheet>
    </div>
  )
};
