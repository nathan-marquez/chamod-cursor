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
    description: "A modern, customizable button component with enhanced styling and interactions.",
    component: (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button label="Primary Button" variant="primary" />
          <Button label="Danger Button" variant="danger" />
          <Button label="Filled Button" variant="filled" />
        </div>
        <div className="flex gap-4">
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
      { name: "label", type: "string", description: "The text displayed on the button." },
      { name: "variant", type: "'primary' | 'danger' | 'filled'", description: "The style variant of the button.", default: "'primary'" },
      { name: "size", type: "'sm' | 'md' | 'lg'", description: "The size of the button.", default: "'md'" },
      { name: "disabled", type: "boolean", description: "Whether the button is disabled.", default: "false" },
      { name: "onClick", type: "() => void", description: "Function to call when button is clicked.", default: "undefined" },
    ],
  },
  {
    name: "Callout Component",
    description: "An enhanced component to display important messages with multiple variants and dismissible functionality.",
    component: (
      <div className="flex flex-col gap-4">
        <Callout message="This is a default callout message" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
        <Callout message="This is a danger callout with enhanced styling" icon={<span role="img" aria-label="exclamation">⚠️</span>} variant="danger" />
        <Callout message="This is a primary callout" icon={<span role="img" aria-label="info">💡</span>} variant="primary" />
        <Callout 
          title="Success!"
          message="This is a success callout with title and dismiss option" 
          icon={<span role="img" aria-label="success">✅</span>} 
          variant="success" 
          dismissible={true}
        />
      </div>
    ),
    exampleMarkup: `
<Callout message="Default callout" icon={<span>ℹ️</span>} variant="default" />
<Callout message="Danger callout" icon={<span>⚠️</span>} variant="danger" />
<Callout message="Primary callout" icon={<span>💡</span>} variant="primary" />
<Callout title="Title" message="Success callout" icon={<span>✅</span>} variant="success" dismissible />`,
    props: [
      { name: "message", type: "string", description: "The content of the callout message." },
      { name: "icon", type: "React.ReactNode", description: "An icon to display next to the message.", default: "undefined" },
      { name: "variant", type: "'default' | 'danger' | 'primary' | 'success' | 'warning'", description: "The style variant of the callout.", default: "'default'" },
      { name: "title", type: "string", description: "Optional title for the callout.", default: "undefined" },
      { name: "dismissible", type: "boolean", description: "Whether the callout can be dismissed.", default: "false" },
      { name: "onDismiss", type: "() => void", description: "Function to call when callout is dismissed.", default: "undefined" },
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
    description: "A modern, small label component with multiple variants and optional remove functionality.",
    component: (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          <Tag label="Default" variant="default" />
          <Tag label="Danger" variant="danger" />
          <Tag label="Primary" variant="primary" />
          <Tag label="Filled" variant="filled" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Tag label="Small" variant="primary" size="sm" />
          <Tag label="Medium" variant="primary" size="md" />
          <Tag label="Large" variant="primary" size="lg" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Tag label="Removable" variant="danger" removable />
        </div>
      </div>
    ),
    exampleMarkup: `
<Tag label="Default" variant="default" />
<Tag label="Danger" variant="danger" />
<Tag label="Primary" variant="primary" />
<Tag label="Filled" variant="filled" />
<Tag label="Small" variant="primary" size="sm" />
<Tag label="Removable" variant="danger" removable />`,
    props: [
      { name: "label", type: "string", description: "The text displayed on the tag." },
      { name: "variant", type: "'default' | 'danger' | 'primary' | 'filled'", description: "The style variant of the tag.", default: "'default'" },
      { name: "size", type: "'sm' | 'md' | 'lg'", description: "The size of the tag.", default: "'md'" },
      { name: "removable", type: "boolean", description: "Whether the tag can be removed.", default: "false" },
      { name: "onRemove", type: "() => void", description: "Function to call when tag is removed.", default: "undefined" },
    ],
  },
];
