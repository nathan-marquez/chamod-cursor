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
    description: "A customizable button component with multiple variants and sizes.",
    component: (
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <Button label="Primary" variant="primary" />
          <Button label="Danger" variant="danger" />
          <Button label="Filled" variant="filled" />
        </div>
        <div className="flex gap-4 items-center">
          <Button label="Small" variant="primary" size="small" />
          <Button label="Medium" variant="primary" size="medium" />
          <Button label="Large" variant="primary" size="large" />
        </div>
        <div className="flex gap-4 items-center">
          <Button label="Disabled" variant="primary" disabled />
          <Button label="Disabled Danger" variant="danger" disabled />
        </div>
      </div>
    ),
    exampleMarkup: `
<Button label="Primary" variant="primary" />
<Button label="Danger" variant="danger" />
<Button label="Filled" variant="filled" />
<Button label="Small" variant="primary" size="small" />
<Button label="Large" variant="primary" size="large" />
<Button label="Disabled" variant="primary" disabled />`,
    props: [
      { name: "label", type: "string", description: "The text displayed on the button." },
      { name: "variant", type: "'primary' | 'danger' | 'filled'", description: "The style variant of the button.", default: "'primary'" },
      { name: "size", type: "'small' | 'medium' | 'large'", description: "The size of the button.", default: "'medium'" },
      { name: "disabled", type: "boolean", description: "Whether the button is disabled.", default: "false" },
      { name: "onClick", type: "() => void", description: "Function to call when the button is clicked.", default: "undefined" },
    ],
  },
  {
    name: "Callout Component",
    description: "A component to display important messages with enhanced styling and variants.",
    component: (
      <div className="flex flex-col gap-4">
        <Callout message="Default callout message" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
        <Callout message="Primary callout message" icon={<span role="img" aria-label="info">💡</span>} variant="primary" />
        <Callout message="Danger callout message" icon={<span role="img" aria-label="warning">⚠️</span>} variant="danger" />
        <Callout message="Small callout" icon={<span role="img" aria-label="info">ℹ️</span>} variant="primary" size="small" />
      </div>
    ),
    exampleMarkup: `
<Callout message="Default callout message" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
<Callout message="Primary callout message" icon={<span role="img" aria-label="info">💡</span>} variant="primary" />
<Callout message="Danger callout message" icon={<span role="img" aria-label="warning">⚠️</span>} variant="danger" />
<Callout message="Small callout" variant="primary" size="small" />`,
    props: [
      { name: "message", type: "string", description: "The content of the callout message." },
      { name: "icon", type: "React.ReactNode", description: "An icon to display next to the message.", default: "undefined" },
      { name: "variant", type: "'default' | 'primary' | 'danger'", description: "The style variant of the callout.", default: "'default'" },
      { name: "size", type: "'small' | 'medium'", description: "The size of the callout.", default: "'medium'" },
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
    description: "A small, customizable label with multiple variants and sizes.",
    component: (
      <div className="space-y-3">
        <div className="flex gap-2">
          <Tag label="Default" variant="default" />
          <Tag label="Primary" variant="primary" />
          <Tag label="Danger" variant="danger" />
        </div>
        <div className="flex gap-2 items-center">
          <Tag label="Small" variant="primary" size="small" />
          <Tag label="Medium" variant="primary" size="medium" />
        </div>
      </div>
    ),
    exampleMarkup: `
<Tag label="Default" variant="default" />
<Tag label="Primary" variant="primary" />
<Tag label="Danger" variant="danger" />
<Tag label="Small" variant="primary" size="small" />`,
    props: [
      { name: "label", type: "string", description: "The text displayed on the tag." },
      { name: "variant", type: "'default' | 'primary' | 'danger'", description: "The style variant of the tag.", default: "'default'" },
      { name: "size", type: "'small' | 'medium'", description: "The size of the tag.", default: "'medium'" },
    ],
  },
];
