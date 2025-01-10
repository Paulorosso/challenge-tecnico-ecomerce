import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type = 'info', onClose }) => {
  const notificationStyles = {
    success: 'bg-green-100 text-green-700 border-green-300',
    error: 'bg-red-100 text-red-700 border-red-300',
    info: 'bg-blue-100 text-blue-700 border-blue-300',
  };

  return (
    <div
      className={`fixed bottom-8 right-5 z-50 p-4 border rounded-md shadow-md flex items-center space-x-3 ${notificationStyles[type]}`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Notification;