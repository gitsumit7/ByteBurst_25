import React from 'react';
import { Smartphone, Laptop, Tablet, Headphones, MapPin, Battery, Wifi, Lock } from 'lucide-react';

export const DeviceCard = ({ device }) => {
  const getDeviceIcon = (type) => {
    switch (type) {
      case 'smartphone': return Smartphone;
      case 'laptop': return Laptop;
      case 'tablet': return Tablet;
      case 'headphones': return Headphones;
      default: return Smartphone;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-600 bg-green-100';
      case 'offline': return 'text-gray-600 bg-gray-100';
      case 'lost': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getBatteryColor = (battery) => {
    if (battery > 60) return 'text-green-600';
    if (battery > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const Icon = getDeviceIcon(device.type);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{device.name}</h3>
            <p className="text-sm text-gray-500">{device.model}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
          {device.status}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{device.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm">
            <Battery className={`w-4 h-4 ${getBatteryColor(device.battery)}`} />
            <span className={getBatteryColor(device.battery)}>{device.battery}%</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Wifi className="w-4 h-4" />
            <span>{device.network}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Locate</span>
            </button>
            <button className="flex-1 bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center space-x-1">
              <Lock className="w-4 h-4" />
              <span>Lock</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};