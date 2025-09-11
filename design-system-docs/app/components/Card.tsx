import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="p-4 border border-gray-700 rounded-md shadow-md bg-gray-800 text-gray-100">
      <h3 className="text-lg font-semibold mb-2 text-blue-300">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
