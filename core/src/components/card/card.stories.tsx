import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Card } from './card';

const meta: Meta<Card> = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
      description: 'The color to use from your application\'s color palette',
    },
    button: {
      control: 'boolean',
      description: 'If true, a button tag will be rendered and the card will be tappable',
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
      description: 'The type of the button. Only used when an onclick or button property is present',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the user cannot interact with the card',
    },
    href: {
      control: 'text',
      description: 'Contains a URL or a URL fragment that the hyperlink points to',
    },
    routerDirection: {
      control: 'select',
      options: ['forward', 'back', 'root'],
      description: 'When using a router, it specifies the transition direction when navigating to another page',
    },
    target: {
      control: 'text',
      description: 'Specifies where to display the linked URL',
    },
  },
  args: {
    button: false,
    disabled: false,
    type: 'button',
    routerDirection: 'forward',
  },
};

export default meta;

type Story = StoryObj<Card>;

export const Basic: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-card {...props}>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
    </div>
  ),
};

export const WithImage: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-card {...props}>
        <img alt="Card header image" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
    </div>
  ),
};

export const AsButton: Story = {
  args: {
    button: true,
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-card {...props}>
        <ion-card-header>
          <ion-card-title>Card Button</ion-card-title>
          <ion-card-subtitle>Click the entire card</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          This card works like a button. Try clicking on it!
        </ion-card-content>
      </ion-card>
    </div>
  ),
};

export const AsLink: Story = {
  args: {
    href: 'https://ionicframework.com',
    target: '_blank',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-card {...props}>
        <ion-card-header>
          <ion-card-title>Card Link</ion-card-title>
          <ion-card-subtitle>Click to open link</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          This card works like a link. Click to open the Ionic website.
        </ion-card-content>
      </ion-card>
    </div>
  ),
};

export const WithList: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-card {...props}>
        <ion-card-header>
          <ion-card-title>Card with List</ion-card-title>
        </ion-card-header>
        <ion-list>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Thumbnail" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Item One</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Thumbnail" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Item Two</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="Thumbnail" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Item Three</ion-label>
          </ion-item>
        </ion-list>
      </ion-card>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-card color="primary">
        <ion-card-header>
          <ion-card-title>Primary Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>Card with primary color</ion-card-content>
      </ion-card>
      <ion-card color="secondary">
        <ion-card-header>
          <ion-card-title>Secondary Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>Card with secondary color</ion-card-content>
      </ion-card>
      <ion-card color="tertiary">
        <ion-card-header>
          <ion-card-title>Tertiary Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>Card with tertiary color</ion-card-content>
      </ion-card>
      <ion-card color="success">
        <ion-card-header>
          <ion-card-title>Success Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>Card with success color</ion-card-content>
      </ion-card>
      <ion-card color="warning">
        <ion-card-header>
          <ion-card-title>Warning Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>Card with warning color</ion-card-content>
      </ion-card>
      <ion-card color="danger">
        <ion-card-header>
          <ion-card-title>Danger Card</ion-card-title>
        </ion-card-header>
        <ion-card-content>Card with danger color</ion-card-content>
      </ion-card>
    </div>
  ),
};
