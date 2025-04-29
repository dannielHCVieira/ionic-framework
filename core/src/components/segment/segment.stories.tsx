import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Segment } from './segment';

const meta: Meta<Segment> = {
  title: 'Segment',
  component: Segment,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'],
      description: 'The color to use from your application\'s color palette',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the user cannot interact with the segment',
    },
    scrollable: {
      control: 'boolean',
      description: 'If true, the segment buttons will overflow and the user can swipe to see them',
    },
    swipeGesture: {
      control: 'boolean',
      description: 'If true, users will be able to swipe between segment buttons to activate them',
    },
    value: {
      control: 'text',
      description: 'The value of the segment',
    },
    selectOnFocus: {
      control: 'boolean',
      description: 'If true, navigating to an ion-segment-button with the keyboard will focus and select the element',
    },
  },
  args: {
    disabled: false,
    scrollable: false,
    swipeGesture: true,
    selectOnFocus: false,
  },
};

export default meta;

type Story = StoryObj<Segment>;

export const Basic: Story = {
  args: {
    value: 'first',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-segment {...props}>
        <ion-segment-button value="first">
          <ion-label>First</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Second</ion-label>
        </ion-segment-button>
        <ion-segment-button value="third">
          <ion-label>Third</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    value: 'first',
    disabled: true,
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-segment {...props}>
        <ion-segment-button value="first">
          <ion-label>First</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Second</ion-label>
        </ion-segment-button>
        <ion-segment-button value="third">
          <ion-label>Third</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>
  ),
};

export const Scrollable: Story = {
  args: {
    value: 'first',
    scrollable: true,
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-segment {...props}>
        <ion-segment-button value="first">
          <ion-label>First</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Second</ion-label>
        </ion-segment-button>
        <ion-segment-button value="third">
          <ion-label>Third</ion-label>
        </ion-segment-button>
        <ion-segment-button value="fourth">
          <ion-label>Fourth</ion-label>
        </ion-segment-button>
        <ion-segment-button value="fifth">
          <ion-label>Fifth</ion-label>
        </ion-segment-button>
        <ion-segment-button value="sixth">
          <ion-label>Sixth</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    value: 'heart',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-segment {...props}>
        <ion-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="star">
          <ion-icon name="star"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
        </ion-segment-button>
      </ion-segment>
    </div>
  ),
};

export const WithLabelsAndIcons: Story = {
  args: {
    value: 'call',
  },
  render: (props) => (
    <div style={{ width: '300px' }}>
      <ion-segment {...props}>
        <ion-segment-button value="call">
          <ion-icon name="call"></ion-icon>
          <ion-label>Call</ion-label>
        </ion-segment-button>
        <ion-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
          <ion-label>Favorites</ion-label>
        </ion-segment-button>
        <ion-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
          <ion-label>Nearby</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ion-segment value="first" color="primary">
        <ion-segment-button value="first">
          <ion-label>Primary</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Primary</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-segment value="first" color="secondary">
        <ion-segment-button value="first">
          <ion-label>Secondary</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Secondary</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-segment value="first" color="tertiary">
        <ion-segment-button value="first">
          <ion-label>Tertiary</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Tertiary</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-segment value="first" color="success">
        <ion-segment-button value="first">
          <ion-label>Success</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Success</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-segment value="first" color="warning">
        <ion-segment-button value="first">
          <ion-label>Warning</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Warning</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-segment value="first" color="danger">
        <ion-segment-button value="first">
          <ion-label>Danger</ion-label>
        </ion-segment-button>
        <ion-segment-button value="second">
          <ion-label>Danger</ion-label>
        </ion-segment-button>
      </ion-segment>
    </div>
  ),
};
