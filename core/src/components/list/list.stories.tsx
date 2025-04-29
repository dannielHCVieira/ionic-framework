import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { List } from './list';

const meta: Meta<List> = {
  title: 'List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    lines: {
      control: 'select',
      options: ['full', 'inset', 'none'],
      description: 'How the bottom border should be displayed on all items',
    },
    inset: {
      control: 'boolean',
      description: 'If true, the list will have margin around it and rounded corners',
    },
  },
  args: {
    lines: 'full',
    inset: false,
  },
};

export default meta;

type Story = StoryObj<List>;

export const Basic: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-list {...props}>
        <ion-item>
          <ion-label>Item 1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item 2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item 3</ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};

export const Inset: Story = {
  args: {
    inset: true,
  },
  render: (props) => (
    <div style={{ width: '300px', background: '#f4f5f8', padding: '16px' }}>
      <ion-list {...props}>
        <ion-item>
          <ion-label>Item 1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item 2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item 3</ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};

export const NoLines: Story = {
  args: {
    lines: 'none',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-list {...props}>
        <ion-item>
          <ion-label>No lines between items</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>No divider shown</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Clean look</ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};

export const InsetLines: Story = {
  args: {
    lines: 'inset',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-list {...props}>
        <ion-item>
          <ion-label>Inset lines</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Lines don't extend to edge</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Nice detail</ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-list {...props}>
        <ion-item>
          <ion-icon name="heart" slot="start"></ion-icon>
          <ion-label>Favorites</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="star" slot="start"></ion-icon>
          <ion-label>Star</ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="call" slot="start"></ion-icon>
          <ion-label>Call</ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};

export const WithAvatars: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-list {...props}>
        <ion-item>
          <ion-avatar slot="start">
            <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>John Smith</h2>
            <p>Email: john@example.com</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Jane Doe</h2>
            <p>Email: jane@example.com</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Bob Johnson</h2>
            <p>Email: bob@example.com</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};

export const WithThumbnails: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-list {...props}>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="Thumbnail" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>
            <h3>Image Item 1</h3>
            <p>Some description text</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="Thumbnail" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>
            <h3>Image Item 2</h3>
            <p>Some description text</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="Thumbnail" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>
            <h3>Image Item 3</h3>
            <p>Some description text</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};

export const WithDividers: Story = {
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-list {...props}>
        <ion-list-header>
          <ion-label>Section A</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label>Item A1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item A2</ion-label>
        </ion-item>
        <ion-item-divider>
          <ion-label>Section B</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>Item B1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item B2</ion-label>
        </ion-item>
        <ion-item-divider>
          <ion-label>Section C</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>Item C1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item C2</ion-label>
        </ion-item>
      </ion-list>
    </div>
  ),
};
