// app/layout.tsx
import React from 'react';
import './globals.css';
import Sidebar from './components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-grow p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
