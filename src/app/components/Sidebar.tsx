// app/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 p-6 flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-8 text-white">Finance Tracker</h2>
      <nav className="space-y-4">
        <Link href="/" className="block text-gray-400 hover:text-white text-lg">
          Dashboard
        </Link>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;
