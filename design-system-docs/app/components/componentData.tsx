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
    description: "A modern, customizable button component with gradient backgrounds and smooth animations.",
    component: (
      <div className="flex gap-4">
        <Button label="Primary Button" variant="primary" />
        <Button label="Danger Button" variant="danger" />
        <Button label="Filled Button" variant="filled" />
      </div>
    ),
    exampleMarkup: `
<Button label="Primary Button" variant="primary" />
<Button label="Danger Button" variant="danger" />
<Button label="Filled Button" variant="filled" />`,
    props: [
      { name: "label", type: "string", description: "The text displayed on the button." },
      { name: "variant", type: "'primary' | 'danger' | 'filled'", description: "The style variant of the button with gradient backgrounds and hover effects.", default: "'primary'" },
    ],
  },
  {
    name: "Callout Component",
    description: "A component to display important messages.",
    component: (
      <div className="flex flex-col gap-4">
        <Callout message="Your call out text here" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
        <Callout message="Your call out text here" icon={<span role="img" aria-label="exclamation">⚠️</span>} variant="danger" />
      </div>
    ),
    exampleMarkup: `
<Callout message="Your call out text here" icon={<span role="img" aria-label="info">ℹ️</span>} variant="default" />
<Callout message="Your call out text here" icon={<span role="img" aria-label="exclamation">⚠️</span>} variant="danger" />`,
    props: [
      { name: "message", type: "string", description: "The content of the callout message." },
      { name: "icon", type: "React.ReactNode", description: "An icon to display next to the message.", default: "undefined" },
      { name: "variant", type: "'default' | 'danger'", description: "The style variant of the callout.", default: "'default'" },
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
    description: "A small, customizable label.",
    component: (
      <div className="flex gap-2">
        <Tag label="tags" variant="default" />
        <Tag label="danger" variant="danger" />
      </div>
    ),
    exampleMarkup: `
<Tag label="tags" variant="default" />
<Tag label="danger" variant="danger" />`,
    props: [
      { name: "label", type: "string", description: "The text displayed on the tag." },
      { name: "variant", type: "'default' | 'danger'", description: "The style variant of the tag.", default: "'default'" },
    ],
  },
];
