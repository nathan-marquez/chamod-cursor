"use client";

import React, { useState, useMemo } from "react";
import Accordion from "./Accordion";
import Button from "./Button";
import Callout from "./Callout";
import Card from "./Card";
import Tag from "./Tag";

interface ComponentDocProps {
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

// Component registry for dynamic rendering
const componentRegistry = {
  Button,
  Callout,
  Card,
  Tag,
};

// Safe JSX parser that creates React elements from string
const parseJSX = (jsxString: string): React.ReactNode => {
  try {
    const cleanJSX = jsxString.trim();

    if (cleanJSX.includes("\n") || cleanJSX.includes("</")) {
      return (
        <div className="flex flex-col gap-4">
          {cleanJSX.split("\n").map((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return null;
            return parseSingleJSX(trimmedLine, index);
          })}
        </div>
      );
    }

    return parseSingleJSX(cleanJSX, 0);
  } catch (error) {
    console.error("Error parsing JSX:", error);
    return (
      <div className="text-red-400 text-sm p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
        Error parsing JSX:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }
};

const parseSingleJSX = (jsxString: string, key: number): React.ReactNode => {
  try {
    const componentMatch = jsxString.match(/<(\w+)/);
    if (!componentMatch) {
      return (
        <div
          key={key}
          className="text-red-400 text-sm p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
        >
          Invalid JSX format
        </div>
      );
    }

    const componentName = componentMatch[1];
    const Component =
      componentRegistry[componentName as keyof typeof componentRegistry];

    if (!Component) {
      return (
        <div
          key={key}
          className="text-red-400 text-sm p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
        >
          Unknown component: {componentName}
        </div>
      );
    }

    const props: Record<string, any> = {};

    // Extract string props
    const stringProps = jsxString.match(/(\w+)="([^"]*)"/g);
    if (stringProps) {
      stringProps.forEach((prop) => {
        const [, name, value] = prop.match(/(\w+)="([^"]*)"/) || [];
        if (name && value !== undefined) {
          props[name] = value;
        }
      });
    }

    // Ensure required props are provided with default values if missing
    if (componentName === 'Button' && !props.label) {
      props.label = 'Button';
    }
    if (componentName === 'Tag' && !props.label) {
      props.label = 'Tag';
    }
    if (componentName === 'Callout' && !props.message) {
      props.message = 'Callout message';
    }

    // Extract boolean props
    const booleanProps = jsxString.match(/(\w+)(?=\s|>)/g);
    if (booleanProps) {
      booleanProps.forEach((prop) => {
        if (prop !== componentName && !props[prop]) {
          props[prop] = true;
        }
      });
    }

    // Handle children content
    const childrenMatch = jsxString.match(/>([^<]+)</);
    if (childrenMatch) {
      props.children = childrenMatch[1].trim();
    }

    const isSelfClosing = jsxString.endsWith("/>");

    if (isSelfClosing) {
      return <Component key={key} {...(props as any)} />;
    } else {
      return <Component key={key} {...(props as any)} />;
    }
  } catch (error) {
    console.error("Error parsing single JSX:", error);
    return (
      <div
        key={key}
        className="text-red-400 text-sm p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
      >
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }
};

const ComponentDoc: React.FC<ComponentDocProps> = ({
  name,
  description,
  component,
  exampleMarkup,
  props,
}) => {
  const [editedCode, setEditedCode] = useState(exampleMarkup);
  const [isEditing, setIsEditing] = useState(false);

  // Parse the edited code to create a dynamic component
  const dynamicComponent = useMemo(() => {
    if (!isEditing) return component;
    return parseJSX(editedCode);
  }, [editedCode, isEditing, component]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedCode(e.target.value);
  };

  const handleReset = () => {
    setEditedCode(exampleMarkup);
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="group relative">
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {name}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400">Live</span>
          </div>
        </div>

        {/* Component Preview */}
        <div className="mb-8 p-8 bg-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur-sm">
          <div className="flex justify-center items-center min-h-[120px]">
            {dynamicComponent}
          </div>
        </div>

        {/* Code Section */}
        <Accordion title="View Code">
          <div className="space-y-4">
            <div className="flex gap-3">
              <button
                onClick={handleEditToggle}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isEditing
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
                }`}
              >
                {isEditing ? "👁️ View Only" : "✏️ Edit Code"}
              </button>
              {isEditing && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-200"
                >
                  🔄 Reset
                </button>
              )}
            </div>

            <div className="relative">
              <textarea
                className="w-full h-48 p-4 border border-slate-600 rounded-lg font-mono text-sm bg-slate-900/50 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none backdrop-blur-sm"
                value={editedCode}
                onChange={handleCodeChange}
                readOnly={!isEditing}
                placeholder="Edit the component code here..."
              />
              {isEditing && (
                <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                  Live editing
                </div>
              )}
            </div>

            {isEditing && (
              <div className="flex items-center space-x-2 text-sm text-slate-400 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <span className="text-blue-400">💡</span>
                <span>
                  Edit the code above to see live changes in the component
                  preview! Changes are temporary until page reload.
                </span>
              </div>
            )}
          </div>
        </Accordion>

        {/* Props Section */}
        <Accordion title="Props">
          <div className="space-y-3">
            {props.map((prop, propIndex) => (
              <div
                key={propIndex}
                className="p-4 bg-slate-900/30 border border-slate-700/50 rounded-lg"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <code className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">
                    {prop.name}
                  </code>
                  <span className="text-slate-400">:</span>
                  <span className="text-purple-400 font-mono text-sm">
                    {prop.type}
                  </span>
                </div>
                <p className="text-slate-300 text-sm mb-1">
                  {prop.description}
                </p>
                {prop.default && (
                  <p className="text-slate-500 text-xs">
                    Default:{" "}
                    <span className="font-mono bg-slate-800 px-1 rounded">
                      {prop.default}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default ComponentDoc;
