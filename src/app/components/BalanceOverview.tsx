// app/components/BalanceOverview.tsx
import React from 'react';

const BalanceOverview: React.FC<{ balance: number; netWorth: number }> = ({ balance, netWorth }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow max-w-sm w-full h-48">
      <h3 className="text-lg font-semibold text-gray-400">Available Balance</h3>
      <p className="text-4xl font-bold text-green-400">${balance.toLocaleString()}</p>
      <h3 className="mt-6 text-lg font-semibold text-gray-400">Total Net Worth</h3>
      <p className="text-4xl font-bold text-orange-400">${netWorth.toLocaleString()}</p>
    </div>
  );
};

export default BalanceOverview;
