import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { chevronForward, heart, star, call } from 'ionicons/icons';

import { Item } from './item';

const meta: Meta<Item> = {
  title: 'Item',
  component: Item,
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
      description: 'If true, a button tag will be rendered and the item will be tappable',
    },
    detail: {
      control: 'boolean',
      description: 'If true, a detail arrow will appear on the item',
    },
    detailIcon: {
      control: 'text',
      description: 'The icon to use when detail is set to true',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the user cannot interact with the item',
    },
    href: {
      control: 'text',
      description: 'Contains a URL or a URL fragment that the hyperlink points to',
    },
    lines: {
      control: 'select',
      options: ['full', 'inset', 'none'],
      description: 'How the bottom border should be displayed on the item',
    },
    routerDirection: {
      control: 'select',
      options: ['forward', 'back', 'root'],
      description: 'When using a router, it specifies the transition direction',
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
      description: 'The type of the button',
    },
  },
  args: {
    button: false,
    detail: false,
    detailIcon: chevronForward,
    disabled: false,
    lines: 'full',
    routerDirection: 'forward',
    type: 'button',
  },
};

export default meta;

type Story = StoryObj<Item>;

export const Basic: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-label>Basic Item</ion-label>
      </ion-item>
    </div>
  ),
};

export const WithDetail: Story = {
  args: {
    detail: true,
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-label>Item with Detail Arrow</ion-label>
      </ion-item>
    </div>
  ),
};

export const AsButton: Story = {
  args: {
    button: true,
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-label>Button Item</ion-label>
      </ion-item>
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
      <ion-item {...props}>
        <ion-label>Link Item</ion-label>
      </ion-item>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-label>Disabled Item</ion-label>
      </ion-item>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-icon slot="start" icon={heart}></ion-icon>
        <ion-label>Item with Icon</ion-label>
      </ion-item>
    </div>
  ),
};

export const WithStartAndEndIcons: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-icon slot="start" icon={star}></ion-icon>
        <ion-label>Item with Icons</ion-label>
        <ion-icon slot="end" icon={call}></ion-icon>
      </ion-item>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-avatar slot="start">
          <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-label>
          <h2>John Smith</h2>
          <p>jsmith@example.com</p>
        </ion-label>
      </ion-item>
    </div>
  ),
};

export const WithThumbnail: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-thumbnail slot="start">
          <img alt="Thumbnail" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>
          <h3>Item with Thumbnail</h3>
          <p>Some description here</p>
        </ion-label>
      </ion-item>
    </div>
  ),
};

export const WithInput: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-label position="floating">Input Label</ion-label>
        <ion-input placeholder="Enter text"></ion-input>
      </ion-item>
    </div>
  ),
};

export const WithToggle: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-label>Toggle Option</ion-label>
        <ion-toggle slot="end"></ion-toggle>
      </ion-item>
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-item {...props}>
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>Checkbox Item</ion-label>
      </ion-item>
    </div>
  ),
};

export const WithRadio: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-radio-group>
        <ion-item {...props}>
          <ion-label>Option 1</ion-label>
          <ion-radio slot="start" value="option1"></ion-radio>
        </ion-item>
        <ion-item {...props}>
          <ion-label>Option 2</ion-label>
          <ion-radio slot="start" value="option2"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </div>
  ),
};

export const LineVariations: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <ion-item lines="full">
        <ion-label>Full Lines</ion-label>
      </ion-item>
      <ion-item lines="inset">
        <ion-label>Inset Lines</ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label>No Lines</ion-label>
      </ion-item>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <ion-item color="primary">
        <ion-label>Primary</ion-label>
      </ion-item>
      <ion-item color="secondary">
        <ion-label>Secondary</ion-label>
      </ion-item>
      <ion-item color="tertiary">
        <ion-label>Tertiary</ion-label>
      </ion-item>
      <ion-item color="success">
        <ion-label>Success</ion-label>
      </ion-item>
      <ion-item color="warning">
        <ion-label>Warning</ion-label>
      </ion-item>
      <ion-item color="danger">
        <ion-label>Danger</ion-label>
      </ion-item>
    </div>
  ),
};
