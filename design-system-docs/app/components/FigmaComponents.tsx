import React from 'react';

/**
 * Figma Component Mappings
 * 
 * This file documents the mapping between Figma components and our React components.
 * Updated: 2025-09-11
 * 
 * Figma Component Updates:
 * - Property 1=Danger (key: 291fb2a90eb1fcedfe57ea65baa3135f81c56518)
 * - Property 1=Primary (key: 361792417486066fd0ea12bbcec92487e0dbb41b)
 * - Property 1=Filled (key: 984591f1eec68eb2b8edfa981b24871b0084edb8)
 */

export interface FigmaComponentMapping {
  figmaKey: string;
  figmaName: string;
  reactComponent: string;
  variant: string;
  description: string;
  lastUpdated: string;
}

export const figmaComponentMappings: FigmaComponentMapping[] = [
  {
    figmaKey: '291fb2a90eb1fcedfe57ea65baa3135f81c56518',
    figmaName: 'Property 1=Danger',
    reactComponent: 'Button, Tag, Callout',
    variant: 'danger',
    description: 'Enhanced danger variant with gradient backgrounds and improved hover effects',
    lastUpdated: '2025-09-11'
  },
  {
    figmaKey: '361792417486066fd0ea12bbcec92487e0dbb41b',
    figmaName: 'Property 1=Primary',
    reactComponent: 'Button, Tag, Callout',
    variant: 'primary',
    description: 'Enhanced primary variant with gradient backgrounds and improved hover effects',
    lastUpdated: '2025-09-11'
  },
  {
    figmaKey: '984591f1eec68eb2b8edfa981b24871b0084edb8',
    figmaName: 'Property 1=Filled',
    reactComponent: 'Button',
    variant: 'filled',
    description: 'Enhanced filled variant with gradient backgrounds and improved hover effects',
    lastUpdated: '2025-09-11'
  }
];

/**
 * FigmaComponentMappings component for documentation purposes
 */
const FigmaComponentMappings: React.FC = () => {
  return (
    <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>🎨</span>
        Figma Component Mappings
      </h3>
      <p className="text-slate-300 mb-6">
        This table shows the mapping between Figma components and their corresponding React implementations.
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="text-left py-3 px-4 text-slate-200 font-semibold">Figma Component</th>
              <th className="text-left py-3 px-4 text-slate-200 font-semibold">React Components</th>
              <th className="text-left py-3 px-4 text-slate-200 font-semibold">Variant</th>
              <th className="text-left py-3 px-4 text-slate-200 font-semibold">Description</th>
              <th className="text-left py-3 px-4 text-slate-200 font-semibold">Updated</th>
            </tr>
          </thead>
          <tbody>
            {figmaComponentMappings.map((mapping, index) => (
              <tr key={mapping.figmaKey} className={`border-b border-slate-700/50 ${index % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
                <td className="py-3 px-4">
                  <div>
                    <div className="text-slate-100 font-medium">{mapping.figmaName}</div>
                    <div className="text-xs text-slate-400 font-mono mt-1">
                      {mapping.figmaKey.substring(0, 8)}...
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-200">{mapping.reactComponent}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    mapping.variant === 'danger' ? 'bg-red-600/20 text-red-300 border border-red-500/30' :
                    mapping.variant === 'primary' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' :
                    'bg-slate-600/20 text-slate-300 border border-slate-500/30'
                  }`}>
                    {mapping.variant}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-300 text-sm">{mapping.description}</td>
                <td className="py-3 px-4 text-slate-400 text-xs">{mapping.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FigmaComponentMappings;