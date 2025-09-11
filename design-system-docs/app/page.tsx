import React from "react";
import Button from "./components/Button";
import Callout from "./components/Callout";
import Card from "./components/Card";
import Tag from "./components/Tag";
import Accordion from "./components/Accordion";
import ComponentDoc from "./components/ComponentDoc";
import { components } from "./components/componentData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Design System
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#components"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Components
              </a>
              <a
                href="#docs"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a
                href="#playground"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Playground
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Design System
            </span>
            <br />
            <span className="text-white">Components</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            A beautiful collection of reusable UI components with live code
            editing. Build faster with our carefully crafted design system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-800 hover:text-white transition-all duration-200">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <main
        id="components"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Component Library
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our collection of components. Click "Edit Code" to see live
            changes in the preview.
          </p>
        </div>

        <div className="grid gap-12">
          {components.map((doc, index) => (
            <ComponentDoc
              key={index}
              name={doc.name}
              description={doc.description}
              component={doc.component}
              exampleMarkup={doc.exampleMarkup}
              props={doc.props}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DS</span>
                </div>
                <span className="text-white font-semibold">Design System</span>
              </div>
              <p className="text-slate-400">
                Beautiful, accessible, and customizable components for modern
                web applications.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Components</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Button
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Card
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Callout
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tag
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; 2024 Design System. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
