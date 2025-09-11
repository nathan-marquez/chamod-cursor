/**
 * Figma Component Mapping
 * 
 * This file maps Figma component keys to our local components
 * for automated design system synchronization.
 */

export interface FigmaComponentMapping {
  key: string;
  name: string;
  componentName: string;
  variant?: string;
  lastUpdated: string;
}

export const figmaComponentMappings: FigmaComponentMapping[] = [
  {
    key: "291fb2a90eb1fcedfe57ea65baa3135f81c56518",
    name: "Property 1=Danger",
    componentName: "Button",
    variant: "danger",
    lastUpdated: "2025-09-11T00:00:00Z"
  },
  {
    key: "361792417486066fd0ea12bbcec92487e0dbb41b",
    name: "Property 1=Primary", 
    componentName: "Button",
    variant: "primary",
    lastUpdated: "2025-09-11T00:00:00Z"
  },
  {
    key: "984591f1eec68eb2b8edfa981b24871b0084edb8",
    name: "Property 1=Filled",
    componentName: "Button", 
    variant: "filled",
    lastUpdated: "2025-09-11T00:00:00Z"
  }
];

/**
 * Get component mapping by Figma key
 */
export function getComponentMappingByKey(key: string): FigmaComponentMapping | undefined {
  return figmaComponentMappings.find(mapping => mapping.key === key);
}

/**
 * Get all mappings for a specific component
 */
export function getMappingsByComponent(componentName: string): FigmaComponentMapping[] {
  return figmaComponentMappings.filter(mapping => mapping.componentName === componentName);
}

/**
 * Update last updated timestamp for a component mapping
 */
export function updateMappingTimestamp(key: string): void {
  const mapping = getComponentMappingByKey(key);
  if (mapping) {
    mapping.lastUpdated = new Date().toISOString();
  }
}