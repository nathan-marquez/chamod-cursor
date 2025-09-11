// Figma component mapping for design system sync
// This file maps Figma component keys to their corresponding React components

export interface FigmaComponentMapping {
  key: string;
  name: string;
  component: string;
  variant?: string;
  lastUpdated: string;
}

export const figmaComponentMappings: FigmaComponentMapping[] = [
  {
    key: "291fb2a90eb1fcedfe57ea65baa3135f81c56518",
    name: "Property 1=Danger",
    component: "Button",
    variant: "danger",
    lastUpdated: "2025-09-11T03:12:52Z"
  },
  {
    key: "361792417486066fd0ea12bbcec92487e0dbb41b",
    name: "Property 1=Primary", 
    component: "Button",
    variant: "primary",
    lastUpdated: "2025-09-11T03:12:52Z"
  },
  {
    key: "984591f1eec68eb2b8edfa981b24871b0084edb8",
    name: "Property 1=Filled",
    component: "Button", 
    variant: "filled",
    lastUpdated: "2025-09-11T03:12:52Z"
  }
];

// Helper function to get component info by Figma key
export function getComponentByFigmaKey(key: string): FigmaComponentMapping | undefined {
  return figmaComponentMappings.find(mapping => mapping.key === key);
}

// Helper function to get all mappings for a specific component
export function getMappingsForComponent(componentName: string): FigmaComponentMapping[] {
  return figmaComponentMappings.filter(mapping => mapping.component === componentName);
}