import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  }
};

export default meta;

type Story = StoryObj<Button>;

export const BasicUsage: Story = {
  render: () => (<div>
    <ion-button>Default</ion-button>
    <ion-button disabled={true}>Disabled</ion-button>
  </div>),
};

export const Expand: Story = {
  render: () => <div style={{ width: '500px' }}>
    <ion-button expand="block">Block</ion-button>
    <ion-button expand="full">Full</ion-button>
  </div>,
};

export const Shape: Story = {
  render: () => <div>
    <ion-button>Default</ion-button>
    <ion-button shape="round">Round</ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="heart"></ion-icon>
    </ion-button>
    <ion-button shape="round">
      <ion-icon slot="icon-only" name="heart"></ion-icon>
    </ion-button>
  </div>,
};

export const Fill: Story = {
  render: () => <div>
    <ion-button>Default</ion-button>
    <ion-button fill="clear">Clear</ion-button>
    <ion-button fill="outline">Outline</ion-button>
    <ion-button fill="solid">Solid</ion-button>
  </div>,
};

export const Size: Story = {
  render: () => <div>
    <ion-button size="small">Small</ion-button>
    <ion-button size="default">Default</ion-button>
    <ion-button size="large">Large</ion-button>
  </div>,
};

export const Icons: Story = {
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    justifyItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }}>
    <ion-button size="small">
      <ion-icon slot="icon-only" ios="logo-apple" md="settings-sharp"></ion-icon>
    </ion-button>

    <ion-button>
      <ion-icon slot="icon-only" ios="logo-apple" md="settings-sharp"></ion-icon>
    </ion-button>

    <ion-button size="large">
      <ion-icon slot="icon-only" ios="logo-apple" md="settings-sharp"></ion-icon>
    </ion-button>

    <ion-button size="small">
      <ion-icon slot="start" name="star"></ion-icon>
      Left Icon
    </ion-button>

    <ion-button>
      <ion-icon slot="start" name="star"></ion-icon>
      Left Icon
    </ion-button>

    <ion-button size="large">
      <ion-icon slot="start" name="star"></ion-icon>
      Left Icon
    </ion-button>

    <ion-button size="small">
      Right Icon
      <ion-icon slot="end" name="heart"></ion-icon>
    </ion-button>

    <ion-button>
      Right Icon
      <ion-icon slot="end" name="heart"></ion-icon>
    </ion-button>

    <ion-button size="large">
      Right Icon
      <ion-icon slot="end" name="heart"></ion-icon>
    </ion-button>
  </div>,
};

export const Theming: Story = {
  render: () => <div style={{
    flexWrap: 'wrap',
    width: '350px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }}>
    <ion-button>Default</ion-button>
    <ion-button color="primary">Primary</ion-button>
    <ion-button color="secondary">Secondary</ion-button>
    <ion-button color="tertiary">Tertiary</ion-button>
    <ion-button color="success">Success</ion-button>
    <ion-button color="warning">Warning</ion-button>
    <ion-button color="danger">Danger</ion-button>
    <ion-button color="light">Light</ion-button>
    <ion-button color="medium">Medium</ion-button>
    <ion-button color="dark">Dark</ion-button>
  </div>,
};

export const CustomCSSProperties: Story = {
  render: () => <div>
    <style>{`
      ion-button {
        --background: #93e9be;
        --background-hover: #9ce0be;
        --background-activated: #88f4be;
        --background-focused: #88f4be;

        --color: blue;

        --border-radius: 0;
        --border-color: #000;
        --border-style: solid;
        --border-width: 1px;

        --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

        --ripple-color: deeppink;

        --padding-top: 10px;
        --padding-bottom: 10px;
      }
    `}</style>

    <ion-button>Custom Button</ion-button>
  </div>,
};

