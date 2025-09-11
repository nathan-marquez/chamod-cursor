import React from 'react';
import Button from "./Button";
import Callout from "./Callout";
import Card from "./Card";
import Tag from "./Tag";

export interface ComponentDocProps {
  name: string;
  description: string;
  component: React.ReactNode;
  exampleMarkup: string;
  props: { name: string; type: string; description: string; default?: string }[];
}

export const components: ComponentDocProps[] = [
  {
    name: "Button Component",
    description: "A customizable button component with enhanced styling and animations.",
    component: (
      <div className="space-y-4">
        <div className="flex gap-4">
          <Button label="Primary Button" variant="primary" />
          <Button label="Danger Button" variant="danger" />
          <Button label="Filled Button" variant="filled" />
        </div>
        <div className="flex gap-4">
          <Button label="Small" variant="primary" size="sm" />
          <Button label="Medium" variant="danger" size="md" />
          <Button label="Large" variant="filled" size="lg" />
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
<Button label="Small" variant="primary" size="sm" />
<Button label="Disabled" variant="primary" disabled />`,
    props: [
      { name: "label", type: "string", description: "The text displayed on the button." },
      { name: "variant", type: "'primary' | 'danger' | 'filled'", description: "The style variant of the button.", default: "'primary'" },
      { name: "size", type: "'sm' | 'md' | 'lg'", description: "The size of the button.", default: "'md'" },
      { name: "disabled", type: "boolean", description: "Whether the button is disabled.", default: "false" },
    ],
  },
  {
    name: "Callout Component",
    description: "A component to display important messages with improved styling and dismissible functionality.",
    component: (
      <div className="flex flex-col gap-4">
        <Callout message="This is a default callout with improved styling" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
        <Callout message="This is a danger callout with enhanced visual design" icon={<span role="img" aria-label="exclamation">⚠️</span>} variant="danger" />
        <Callout message="This callout can be dismissed" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" dismissible onDismiss={() => {}} />
      </div>
    ),
    exampleMarkup: `
<Callout message="Your call out text here" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
<Callout message="Your call out text here" icon={<span role="img" aria-label="exclamation">⚠️</span>} variant="danger" />
<Callout message="Dismissible callout" dismissible onDismiss={() => {}} />`,
    props: [
      { name: "message", type: "string", description: "The content of the callout message." },
      { name: "icon", type: "React.ReactNode", description: "An icon to display next to the message.", default: "undefined" },
      { name: "variant", type: "'default' | 'danger'", description: "The style variant of the callout.", default: "'default'" },
      { name: "dismissible", type: "boolean", description: "Whether the callout can be dismissed.", default: "false" },
      { name: "onDismiss", type: "() => void", description: "Callback function when the callout is dismissed.", default: "undefined" },
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
      { name: "title", type: "string", description: "The title displayed at the top of the card." },
      { name: "children", type: "React.ReactNode", description: "The content rendered inside the card." },
    ],
  },
  {
    name: "Tag Component",
    description: "A small, customizable label with enhanced styling and removable functionality.",
    component: (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Tag label="Default" variant="default" />
          <Tag label="Danger" variant="danger" />
        </div>
        <div className="flex gap-2">
          <Tag label="Small" variant="default" size="sm" />
          <Tag label="Medium" variant="danger" size="md" />
          <Tag label="Large" variant="default" size="lg" />
        </div>
        <div className="flex gap-2">
          <Tag label="Removable" variant="default" removable onRemove={() => {}} />
          <Tag label="Remove me" variant="danger" removable onRemove={() => {}} />
        </div>
      </div>
    ),
    exampleMarkup: `
<Tag label="Default" variant="default" />
<Tag label="Danger" variant="danger" />
<Tag label="Small" size="sm" />
<Tag label="Removable" removable onRemove={() => {}} />`,
    props: [
      { name: "label", type: "string", description: "The text displayed on the tag." },
      { name: "variant", type: "'default' | 'danger'", description: "The style variant of the tag.", default: "'default'" },
      { name: "size", type: "'sm' | 'md' | 'lg'", description: "The size of the tag.", default: "'md'" },
      { name: "removable", type: "boolean", description: "Whether the tag can be removed.", default: "false" },
      { name: "onRemove", type: "() => void", description: "Callback function when the tag is removed.", default: "undefined" },
    ],
  },
];
