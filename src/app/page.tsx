"use client"
// app/page.tsx
import React from 'react';
import TopHeader from './components/TopHeader';
import BalanceOverview from './components/BalanceOverview';
import IncomeSources from './components/IncomeSources';
import SpendingBreakdown from './components/SpendingBreakdown';
import IncomeGoal from './components/IncomeGoal';
import Notifications from './components/Notifications';

const mockData = {
  balance: 14822,
  netWorth: 278378,
  incomeSources: [
    { source: 'E-commerce', amount: 2100 },
    { source: 'Google Adsense', amount: 950 },
    { source: 'My Shop', amount: 8000 },
    { source: 'Salary', amount: 13000 },
  ],
  spendingCategories: [
    { category: 'Housing', amount: 3452 },
    { category: 'Personal', amount: 45581 },
    { category: 'Transportation', amount: 2190 },
  ],
  incomeGoal: { current: 24050, target: 39276 },
  notifications: [
    '3 Bills are past due. Pay soon to avoid late fees.',
  ],
};

export default function HomePage() {
  return (
    <div className="space-y-4">
      <TopHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BalanceOverview balance={mockData.balance} netWorth={mockData.netWorth} />
        <IncomeSources sources={mockData.incomeSources} />
        <SpendingBreakdown categories={mockData.spendingCategories} />
        <IncomeGoal goal={mockData.incomeGoal} />
        <Notifications notifications={mockData.notifications} />
      </div>
    </div>
  );
}
