// app/components/IncomeSources.tsx
import React from 'react';

type IncomeSource = {
  source: string;
  amount: number;
};

const IncomeSources: React.FC<{ sources: IncomeSource[] }> = ({ sources }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow max-w-sm">
      <h3 className="text-lg font-semibold text-gray-400 mb-4">Income Sources</h3>
      <ul className="space-y-2">
        {sources.map((source, index) => (
          <li key={index} className="flex justify-between text-gray-300">
            <span>{source.source}</span>
            <span className="font-semibold">${source.amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeSources;
