import React from 'react';
import { AlertTriangle, MapPin, Battery, Wifi, Clock } from 'lucide-react';

export const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: 'security',
      title: 'Unauthorized SIM Card Detected',
      device: 'iPhone 13 Pro',
      time: '2 minutes ago',
      severity: 'high',
      icon: AlertTriangle,
      description: 'A new SIM card has been inserted into your device.',
    },
    {
      id: 2,
      type: 'location',
      title: 'Device Left Safe Zone',
      device: 'MacBook Pro',
      time: '15 minutes ago',
      severity: 'medium',
      icon: MapPin,
      description: 'Your device has moved outside the designated geo-fence area.',
    },
    {
      id: 3,
      type: 'battery',
      title: 'Low Battery Alert',
      device: 'iPad Air',
      time: '1 hour ago',
      severity: 'low',
      icon: Battery,
      description: 'Device battery is below 15%. Location tracking may be affected.',
    },
    {
      id: 4,
      type: 'network',
      title: 'Connection Lost',
      device: 'AirPods Pro',
      time: '2 hours ago',
      severity: 'medium',
      icon: Wifi,
      description: 'Device disconnected from all networks. Last known location updated.',
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-50 border-red-200 text-red-700';
      case 'medium': return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'low': return 'bg-blue-50 border-blue-200 text-blue-700';
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getIconColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Alerts</h2>
        <p className="text-gray-600">Monitor security events and notifications for your devices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className={`border rounded-xl p-6 ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${getIconColor(alert.severity)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{alert.title}</h3>
                      <span className="text-xs font-medium opacity-75 flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{alert.time}</span>
                      </span>
                    </div>
                    <p className="text-sm opacity-75 mb-2">{alert.device}</p>
                    <p className="text-sm">{alert.description}</p>
                    <div className="flex space-x-2 mt-4">
                      <button className="bg-white bg-opacity-50 px-3 py-1 rounded-lg text-sm font-medium hover:bg-opacity-75 transition-colors">
                        View Details
                      </button>
                      <button className="bg-white bg-opacity-50 px-3 py-1 rounded-lg text-sm font-medium hover:bg-opacity-75 transition-colors">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Alert Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Security Alerts</span>
                <button className="w-10 h-6 bg-blue-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Location Alerts</span>
                <button className="w-10 h-6 bg-blue-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Battery Alerts</span>
                <button className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Network Alerts</span>
                <button className="w-10 h-6 bg-blue-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Alert Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">High Priority</span>
                <span className="text-sm font-semibold text-red-600">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Medium Priority</span>
                <span className="text-sm font-semibold text-yellow-600">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Low Priority</span>
                <span className="text-sm font-semibold text-blue-600">1</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-900">Total Alerts</span>
                <span className="text-sm font-bold text-gray-900">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};