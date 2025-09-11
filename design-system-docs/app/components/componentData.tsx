import type React from "react";
import Button from "./Button";
import Callout from "./Callout";
import Card from "./Card";
import Tag from "./Tag";

export interface ComponentDocProps {
  name: string;
  description: string;
  component: React.ReactNode;
  exampleMarkup: string;
  props: {
    name: string;
    type: string;
    description: string;
    default?: string;
  }[];
}

export const components: ComponentDocProps[] = [
  {
    name: "Button Component",
    description:
      "A customizable button component with enhanced styling and animations.",
    component: (
      <div className="space-y-4">
        <div className="flex gap-4">
          <Button label="Primary Button" variant="primary" />
          <Button label="Danger Button" variant="danger" />
          <Button label="Filled Button" variant="filled" />
        </div>
        <div className="flex gap-4 items-center">
          <Button label="Small" variant="primary" size="sm" />
          <Button label="Medium" variant="primary" size="md" />
          <Button label="Large" variant="primary" size="lg" />
        </div>
        <div className="flex gap-4">
          <Button label="Disabled" variant="primary" disabled />
        </div>
      </div>
    ),
    exampleMarkup: `
<Button label="Primary Button" variant="primary" />
<Button label="Danger Button" variant="danger" />
<Button label="Filled Button" variant="filled" />
<Button label="Small Button" variant="primary" size="sm" />
<Button label="Disabled Button" variant="primary" disabled />`,
    props: [
      {
        name: "label",
        type: "string",
        description: "The text displayed on the button.",
      },
      {
        name: "variant",
        type: "'primary' | 'danger' | 'filled'",
        description: "The style variant of the button.",
        default: "'primary'",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        description: "The size of the button.",
        default: "'md'",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Whether the button is disabled.",
        default: "false",
      },
    ],
  },
  {
    name: "Callout Component",
    description:
      "A component to display important messages with enhanced visual styling.",
    component: (
      <div className="flex flex-col gap-4">
        <Callout
          message="Default callout with informational content"
          icon={
            <span role="img" aria-label="info">
              ℹ️
            </span>
          }
          variant="default"
        />
        <Callout
          message="Danger callout for critical warnings"
          icon={
            <span role="img" aria-label="exclamation">
              ⚠️
            </span>
          }
          variant="danger"
        />
        <Callout
          message="Primary callout for important information"
          icon={
            <span role="img" aria-label="star">
              ⭐
            </span>
          }
          variant="primary"
        />
        <Callout
          message="Success callout for positive feedback"
          icon={
            <span role="img" aria-label="check">
              ✅
            </span>
          }
          variant="success"
        />
      </div>
    ),
    exampleMarkup: `
<Callout message="Default callout message" icon={<span>ℹ️</span>} variant="default" />
<Callout message="Danger callout message" icon={<span>⚠️</span>} variant="danger" />
<Callout message="Primary callout message" icon={<span>⭐</span>} variant="primary" />
<Callout message="Success callout message" icon={<span>✅</span>} variant="success" />`,
    props: [
      {
        name: "message",
        type: "string",
        description: "The content of the callout message.",
      },
      {
        name: "icon",
        type: "React.ReactNode",
        description: "An icon to display next to the message.",
        default: "undefined",
      },
      {
        name: "variant",
        type: "'default' | 'danger' | 'primary' | 'success'",
        description: "The style variant of the callout.",
        default: "'default'",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        description: "The size of the callout.",
        default: "'md'",
      },
    ],
  },
  {
    name: "Card Component",
    description: "A flexible container for grouping related content.",
    component: (
      <Card title="Header in a card">
        <p>Body text</p>
      </Card>
    ),
    exampleMarkup: `<Card title="Header in a card">\n  <p>Body text</p>\n</Card>`,
    props: [
      {
        name: "title",
        type: "string",
        description: "The title displayed at the top of the card.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "The content rendered inside the card.",
      },
    ],
  },
  {
    name: "Tag Component",
    description:
      "A small, customizable label with enhanced styling and multiple variants.",
    component: (
      <div className="space-y-3">
        <div className="flex gap-2">
          <Tag label="default" variant="default" />
          <Tag label="danger" variant="danger" />
          <Tag label="primary" variant="primary" />
        </div>
        <div className="flex gap-2 items-center">
          <Tag label="small" variant="primary" size="sm" />
          <Tag label="medium" variant="primary" size="md" />
          <Tag label="large" variant="primary" size="lg" />
        </div>
      </div>
    ),
    exampleMarkup: `
<Tag label="default" variant="default" />
<Tag label="danger" variant="danger" />
<Tag label="primary" variant="primary" />
<Tag label="small" variant="primary" size="sm" />`,
    props: [
      {
        name: "label",
        type: "string",
        description: "The text displayed on the tag.",
      },
      {
        name: "variant",
        type: "'default' | 'danger' | 'primary'",
        description: "The style variant of the tag.",
        default: "'default'",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        description: "The size of the tag.",
        default: "'md'",
      },
    ],
  },
];
