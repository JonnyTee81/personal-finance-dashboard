// app/components/SpendingBreakdown.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type Category = {
  category: string;
  amount: number;
};

const SpendingBreakdown: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const data = {
    labels: categories.map(cat => cat.category),
    datasets: [
      {
        data: categories.map(cat => cat.amount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow max-w-sm">
      <h3 className="text-lg font-semibold text-gray-400 mb-4">Spending Breakdown</h3>
      <div className="chart-container max-h-64">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default SpendingBreakdown;
