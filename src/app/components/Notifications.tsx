// app/components/Notifications.tsx
import React from 'react';

type NotificationsProps = {
  notifications: string[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow max-w-sm">
      <h3 className="text-lg font-semibold text-gray-400 mb-4">Notifications</h3>
      <ul className="space-y-2">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li
              key={index}
              className="bg-red-500 bg-opacity-25 p-2 rounded text-red-400 text-sm"
            >
              {notification}
            </li>
          ))
        ) : (
          <li className="text-gray-400">No notifications</li>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
