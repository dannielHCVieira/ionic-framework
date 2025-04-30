import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import { Badge } from './badge';

const meta: Meta<Badge & { text: string }> = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  }
};

export default meta;

type Story = StoryObj<Badge & { text: string }>;

export const Primary: Story = {
  render: () => (
    <ion-list style={{ width: '300px' }}>
      <ion-item>
        <ion-badge slot="start">11</ion-badge>
        <ion-label>Badge in start slot</ion-label>
      </ion-item>
      <ion-item>
        <ion-badge slot="end">22</ion-badge>
        <ion-label>Badge in end slot</ion-label>
      </ion-item>
    </ion-list>
  ),
};

export const BadgesInTabButtons: Story = {
  render: () => (
    <ion-tab-bar color="light" style={{ width: '500px' }}>
      <ion-tab-button tab="1">
        <ion-icon name="heart"></ion-icon>
        <ion-label>Favorites</ion-label>
        <ion-badge color="danger"></ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="2">
        <ion-icon name="musical-note"></ion-icon>
        <ion-label>Music</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="3">
        <ion-icon name="calendar"></ion-icon>
        <ion-label>Calendar</ion-label>
        <ion-badge color="danger">47</ion-badge>
      </ion-tab-button>
    </ion-tab-bar>
  )
}

export const Theming: Story = {
  render: () => (
    <ion-list style={{ width: '300px' }}>
      <ion-item>
        <ion-label>Followers</ion-label>
        <ion-badge color="primary">22k</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Likes</ion-label>
        <ion-badge color="secondary">118k</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Stars</ion-label>
        <ion-badge color="tertiary">34k</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Completed</ion-label>
        <ion-badge color="success">80</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Warnings</ion-label>
        <ion-badge color="warning">70</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Notifications</ion-label>
        <ion-badge color="danger">1000</ion-badge>
      </ion-item>
    </ion-list>
  )
}

export const CSSProperties: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <ion-list>
        <ion-item>
          <ion-label>Badges styled</ion-label>
          <ion-badge>1</ion-badge>
        </ion-item>
      </ion-list>

      <style>{`
        ion-badge {
          --background: purple;
          --color: white;
          --padding-end: 20px;
          --padding-start: 20px;
        }
      `}</style>
    </div>
  )
}