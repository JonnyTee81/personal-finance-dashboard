// app/components/IncomeGoal.tsx
import React from 'react';

type IncomeGoalProps = {
  goal: {
    current: number;
    target: number;
  };
};

const IncomeGoal: React.FC<IncomeGoalProps> = ({ goal }) => {
  const progress = (goal.current / goal.target) * 100;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow max-w-sm">
      <h3 className="text-lg font-semibold text-gray-400 mb-4">Income Goal</h3>
      <p className="text-lg text-gray-300">
        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
      </p>
      <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
        <div
          className="bg-purple-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-400 mt-2">{progress.toFixed(1)}% of goal</p>
    </div>
  );
};

export default IncomeGoal;
