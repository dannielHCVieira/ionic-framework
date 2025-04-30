import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@stencil/storybook-plugin';

import type { BreadcrumbCollapsedClickEventDetail } from '../breadcrumb/breadcrumb-interface';

import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<Breadcrumbs & { text: string }> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  }
};

const breadcrumbProps = {
  last: false,
  showCollapsedIndicator: false
} as const;
const lastBreadcrumbProps = {
  ...breadcrumbProps,
  last: true
} as const;

export default meta;

type Story = StoryObj<Breadcrumbs & { text: string }>;

export const Primary: Story = {
  render: () => (
    <ion-breadcrumbs style={{ width: '500px' }}>
      <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
      <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
      <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
      <ion-breadcrumb href="#film" {...lastBreadcrumbProps}>Film</ion-breadcrumb>
    </ion-breadcrumbs>
  ),
};

export const UsingIcons: Story = {
  render: () => (
    <div style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ion-label style={{ marginInline: 'auto' }}>Icons at Start</ion-label>
      <ion-breadcrumbs>
        <ion-breadcrumb href="#home" {...breadcrumbProps}>
          <ion-icon slot="start" name="home"></ion-icon>
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>
          <ion-icon slot="start" name="flash"></ion-icon>
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>
          <ion-icon slot="start" name="camera"></ion-icon>
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film" {...lastBreadcrumbProps}>
          <ion-icon slot="start" name="film"></ion-icon>
          Film
        </ion-breadcrumb>
      </ion-breadcrumbs>

      <ion-label style={{ marginInline: 'auto' }}>Icons at End</ion-label>
      <ion-breadcrumbs>
        <ion-breadcrumb href="#home" {...breadcrumbProps}>
          Home
          <ion-icon slot="end" name="home"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>
          Electronics
          <ion-icon slot="end" name="flash"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>
          Cameras
          <ion-icon slot="end" name="camera"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#film" {...lastBreadcrumbProps}>
          Film
          <ion-icon slot="end" name="film"></ion-icon>
        </ion-breadcrumb>
      </ion-breadcrumbs>
    </div>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <ion-breadcrumbs>
      <ion-breadcrumb href="#home" {...breadcrumbProps}>
        Home
        <ion-icon slot="separator" name="arrow-forward-circle"></ion-icon>
      </ion-breadcrumb>
      <ion-breadcrumb href="#electronics" {...breadcrumbProps}>
        Electronics
        <ion-icon slot="separator" name="arrow-forward-circle"></ion-icon>
      </ion-breadcrumb>
      <ion-breadcrumb href="#cameras" {...breadcrumbProps}>
        Cameras
        <ion-icon slot="separator" name="arrow-forward-circle"></ion-icon>
      </ion-breadcrumb>
      <ion-breadcrumb href="#film" {...lastBreadcrumbProps}>
        Film
        <ion-icon slot="separator" name="arrow-forward-circle"></ion-icon>
      </ion-breadcrumb>
    </ion-breadcrumbs>
  ),
};

export const CustomCollapse: Story = {
  render: () => (
    <ion-breadcrumbs max-items="4">
      <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
      <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
      <ion-breadcrumb href="#photography" {...breadcrumbProps}>Photography</ion-breadcrumb>
      <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
      <ion-breadcrumb href="#film" {...breadcrumbProps}>Film</ion-breadcrumb>
      <ion-breadcrumb href="#35mm" {...lastBreadcrumbProps}>35 mm</ion-breadcrumb>
    </ion-breadcrumbs>
  ),
};

export const ItemsBeforeAfterCollapse: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ marginInline: 'auto' }}>Before Collapse = 2</div>
      <ion-breadcrumbs max-items="4" items-before-collapse="2">
        <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
        <ion-breadcrumb href="#photography" {...breadcrumbProps}>Photography</ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
        <ion-breadcrumb href="#film" {...breadcrumbProps}>Film</ion-breadcrumb>
        <ion-breadcrumb href="#35mm" {...lastBreadcrumbProps}>35 mm</ion-breadcrumb>
      </ion-breadcrumbs>

      <div style={{ marginInline: 'auto' }}>Before Collapse = 0</div>
      <ion-breadcrumbs max-items="4" items-before-collapse="0">
        <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
        <ion-breadcrumb href="#photography" {...breadcrumbProps}>Photography</ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
        <ion-breadcrumb href="#film" {...breadcrumbProps}>Film</ion-breadcrumb>
        <ion-breadcrumb href="#35mm" {...lastBreadcrumbProps}>35 mm</ion-breadcrumb>
      </ion-breadcrumbs>

      <div style={{ marginInline: 'auto' }}>After Collapse = 2</div>
      <ion-breadcrumbs max-items="4" items-after-collapse="2">
        <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
        <ion-breadcrumb href="#photography" {...breadcrumbProps}>Photography</ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
        <ion-breadcrumb href="#film" {...breadcrumbProps}>Film</ion-breadcrumb>
        <ion-breadcrumb href="#35mm" {...lastBreadcrumbProps}>35 mm</ion-breadcrumb>
      </ion-breadcrumbs>

      <div style={{ marginInline: 'auto' }}>Before Collapse = 2, After Collapse = 2</div>
      <ion-breadcrumbs max-items="4" items-before-collapse="2" items-after-collapse="2">
        <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
        <ion-breadcrumb href="#photography" {...breadcrumbProps}>Photography</ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
        <ion-breadcrumb href="#film" {...breadcrumbProps}>Film</ion-breadcrumb>
        <ion-breadcrumb href="#35mm" {...lastBreadcrumbProps}>35 mm</ion-breadcrumb>
      </ion-breadcrumbs>
    </div>
  ),
};

export const CustomCollapsedIndicator: Story = {
  render: () => {
    function collapsedIndicator() {
      const breadcrumbs = document.querySelector('ion-breadcrumbs') as HTMLIonBreadcrumbsElement;
      breadcrumbs.maxItems = undefined;
    }
    return (
      <ion-breadcrumbs max-items="4" onIonCollapsedClick={collapsedIndicator}>
        <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
        <ion-breadcrumb href="#photography" {...breadcrumbProps}>Photography</ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
        <ion-breadcrumb href="#film" {...breadcrumbProps}>Film</ion-breadcrumb>
        <ion-breadcrumb href="#35mm" {...lastBreadcrumbProps}>35 mm</ion-breadcrumb>
      </ion-breadcrumbs>
    )
  },
};

export const CustomCollapsedIndicatorClick: Story = {
  render: () => {
    function collapsedIndicator(e: CustomEvent<BreadcrumbCollapsedClickEventDetail>) {
      const popover = document.querySelector('ion-popover') as HTMLIonPopoverElement;
      const popoverList = document.querySelector('ion-popover ion-list') as HTMLIonListElement;

      if (!e.detail.collapsedBreadcrumbs) {
        return;
      }

      let listHTML = ``;
      e.detail.collapsedBreadcrumbs.forEach((breadcrumb, i) => {
        if (!e.detail.collapsedBreadcrumbs) {
          return;
        }

        listHTML += `
          <ion-item
            ${i === e.detail.collapsedBreadcrumbs.length - 1 ? `lines="none"` : ''}
            href="${breadcrumb.href}"
          >
            <ion-label>${breadcrumb.textContent}</ion-label>
          </ion-item>
        `;
      });

      popoverList.innerHTML = listHTML;
      popover.event = e;
      popover.isOpen = true;
    }

    function popoverDismiss() {
      const popover = document.querySelector('ion-popover') as HTMLIonPopoverElement;
      popover.isOpen = false;
    }

    return (
      <div>
        <ion-breadcrumbs max-items="4" onIonCollapsedClick={collapsedIndicator}>
          <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
          <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
          <ion-breadcrumb href="#photography" {...breadcrumbProps}>Photography</ion-breadcrumb>
          <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
          <ion-breadcrumb href="#film" {...breadcrumbProps}>Film</ion-breadcrumb>
          <ion-breadcrumb href="#35mm" {...lastBreadcrumbProps}>35 mm</ion-breadcrumb>
        </ion-breadcrumbs>
        <ion-popover overlayIndex={1000} onDidDismiss={popoverDismiss}>
          <ion-content>
            <ion-list></ion-list>
          </ion-content>
        </ion-popover>
      </div>
    )
  },
};

export const CustomCSSProperties: Story = {
  render: () => (
    <div>
      <ion-breadcrumbs>
        <ion-breadcrumb href="#home" {...breadcrumbProps}>Home</ion-breadcrumb>
        <ion-breadcrumb href="#electronics" {...breadcrumbProps}>Electronics</ion-breadcrumb>
        <ion-breadcrumb href="#cameras" {...breadcrumbProps}>Cameras</ion-breadcrumb>
        <ion-breadcrumb href="#film" {...lastBreadcrumbProps}>Film</ion-breadcrumb>
      </ion-breadcrumbs>

      <style>{`
        ion-breadcrumb {
          --color: rgb(81, 155, 198);
          --color-active: rgb(150, 112, 220);
          --color-hover: rgb(103, 61, 180);
        }
      `}</style>
    </div>
  ),
};