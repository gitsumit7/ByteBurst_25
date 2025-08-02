import React from 'react';
import { Shield, Bell, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">DeviceGuard</h1>
              <p className="text-sm text-gray-500">Device Tracking & Security</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Sumit</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};