import React from "react";
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
      "A customizable button component with multiple variants and sizes.",
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
          <Button label="Enabled" variant="primary" />
          <Button label="Disabled" variant="primary" disabled />
        </div>
      </div>
    ),
    exampleMarkup: `
<Button label="Primary Button" variant="primary" />
<Button label="Danger Button" variant="danger" />
<Button label="Filled Button" variant="filled" />

<!-- Different sizes -->
<Button label="Small" variant="primary" size="sm" />
<Button label="Medium" variant="primary" size="md" />
<Button label="Large" variant="primary" size="lg" />

<!-- Disabled state -->
<Button label="Disabled" variant="primary" disabled />`,
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
      {
        name: "onClick",
        type: "() => void",
        description: "Function called when the button is clicked.",
        default: "undefined",
      },
    ],
  },
  {
    name: "Callout Component",
    description:
      "A component to display important messages with multiple variants.",
    component: (
      <div className="flex flex-col gap-4">
        <Callout
          message="This is a default callout message"
          icon={
            <span role="img" aria-label="info">
              ℹ️
            </span>
          }
          variant="default"
        />
        <Callout
          message="This is a danger callout message"
          icon={
            <span role="img" aria-label="exclamation">
              ⚠️
            </span>
          }
          variant="danger"
        />
        <Callout
          message="This is a success callout message"
          icon={
            <span role="img" aria-label="check">
              ✅
            </span>
          }
          variant="success"
        />
        <Callout
          message="This is a warning callout message"
          icon={
            <span role="img" aria-label="warning">
              ⚠️
            </span>
          }
          variant="warning"
        />
      </div>
    ),
    exampleMarkup: `
<Callout message="This is a default callout message" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
<Callout message="This is a danger callout message" icon={<span role="img" aria-label="exclamation">⚠️</span>} variant="danger" />
<Callout message="This is a success callout message" icon={<span role="img" aria-label="check">✅</span>} variant="success" />
<Callout message="This is a warning callout message" icon={<span role="img" aria-label="warning">⚠️</span>} variant="warning" />`,
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
        type: "'default' | 'danger' | 'success' | 'warning'",
        description: "The style variant of the callout.",
        default: "'default'",
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
      "A small, customizable label with multiple variants and sizes.",
    component: (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Tag label="Default" variant="default" />
          <Tag label="Primary" variant="primary" />
          <Tag label="Danger" variant="danger" />
          <Tag label="Success" variant="success" />
          <Tag label="Warning" variant="warning" />
        </div>
        <div className="flex gap-2 items-center">
          <Tag label="Small" variant="primary" size="sm" />
          <Tag label="Medium" variant="primary" size="md" />
          <Tag label="Large" variant="primary" size="lg" />
        </div>
      </div>
    ),
    exampleMarkup: `
<Tag label="Default" variant="default" />
<Tag label="Primary" variant="primary" />
<Tag label="Danger" variant="danger" />
<Tag label="Success" variant="success" />
<Tag label="Warning" variant="warning" />

<!-- Different sizes -->
<Tag label="Small" variant="primary" size="sm" />
<Tag label="Medium" variant="primary" size="md" />
<Tag label="Large" variant="primary" size="lg" />`,
    props: [
      {
        name: "label",
        type: "string",
        description: "The text displayed on the tag.",
      },
      {
        name: "variant",
        type: "'default' | 'danger' | 'primary' | 'success' | 'warning'",
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
