import React from 'react';
import { MapPin, Clock, Smartphone, Laptop, Tablet } from 'lucide-react';

export const HistoryPanel = () => {
  const historyData = [
    {
      id: 1,
      device: 'iPhone 13 Pro',
      type: 'smartphone',
      action: 'Location Updated',
      location: 'Central Park, New York',
      timestamp: '2024-01-15 14:30:00',
      status: 'success'
    },
    {
      id: 2,
      device: 'MacBook Pro',
      type: 'laptop',
      action: 'Remote Lock Activated',
      location: 'Home Office',
      timestamp: '2024-01-15 12:15:00',
      status: 'security'
    },
    {
      id: 3,
      device: 'iPad Air',
      type: 'tablet',
      action: 'Device Recovered',
      location: 'Coffee Shop, Manhattan',
      timestamp: '2024-01-15 10:45:00',
      status: 'success'
    },
    {
      id: 4,
      device: 'iPhone 13 Pro',
      type: 'smartphone',
      action: 'SIM Card Changed',
      location: 'Times Square, New York',
      timestamp: '2024-01-15 09:20:00',
      status: 'alert'
    },
    {
      id: 5,
      device: 'MacBook Pro',
      type: 'laptop',
      action: 'Low Battery Alert',
      location: 'Public Library',
      timestamp: '2024-01-15 08:00:00',
      status: 'warning'
    }
  ];

  const getDeviceIcon = (type) => {
    switch (type) {
      case 'smartphone': return Smartphone;
      case 'laptop': return Laptop;
      case 'tablet': return Tablet;
      default: return Smartphone;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-700';
      case 'security': return 'bg-blue-100 text-blue-700';
      case 'alert': return 'bg-red-100 text-red-700';
      case 'warning': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Activity History</h2>
        <p className="text-gray-600">View the complete history of device activities and security events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Recent Activity</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              {historyData.map((item) => {
                const DeviceIcon = getDeviceIcon(item.type);
                return (
                  <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DeviceIcon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{item.action}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-1">{item.device}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{formatTimestamp(item.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Load More History
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Filter & Export</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Device</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Devices</option>
                  <option>iPhone 13 Pro</option>
                  <option>MacBook Pro</option>
                  <option>iPad Air</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Custom Range</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Activity Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Activities</option>
                  <option>Location Updates</option>
                  <option>Security Events</option>
                  <option>System Alerts</option>
                </select>
              </div>
              
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Filters
              </button>
              
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Export to CSV
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Activity Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Events</span>
                <span className="text-sm font-semibold text-gray-900">247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Security Actions</span>
                <span className="text-sm font-semibold text-blue-600">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Location Updates</span>
                <span className="text-sm font-semibold text-green-600">198</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">System Alerts</span>
                <span className="text-sm font-semibold text-red-600">37</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};