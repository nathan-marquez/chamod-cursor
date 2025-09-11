"use client";

import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-slate-500/60 rounded-lg mb-3 bg-slate-900/80 backdrop-blur-sm shadow-lg">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-medium text-slate-100 bg-slate-800/70 hover:bg-slate-700/80 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent focus:shadow-none active:outline-none active:ring-0 active:ring-offset-0 transition-all duration-200 ease-in-out rounded-t-lg hover:bg-gradient-to-r hover:from-slate-700/80 hover:to-slate-600/80"
        onClick={toggleAccordion}
      >
        <span className="text-slate-200">{title}</span>
        <svg
          className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-slate-500/40 bg-slate-800/60 rounded-b-lg backdrop-blur-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
