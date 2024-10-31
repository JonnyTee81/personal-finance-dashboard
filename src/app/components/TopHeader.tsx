// app/components/TopHeader.tsx
import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow mb-4">
      <span className="text-gray-400">October 30, 2024</span>
      <div className="flex items-center">
        <span className="text-gray-200 mr-2">User Name</span>
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div> {/* Placeholder for profile image */}
      </div>
    </div>
  );
};

export default TopHeader;
