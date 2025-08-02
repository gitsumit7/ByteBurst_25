import React, { useState } from 'react';
import { MapPin, Navigation, Crosshair, Layers } from 'lucide-react';
import { useDeviceContext } from '../context/DeviceContext';

export const LiveTracking = () => {
  const { devices } = useDeviceContext();
  const [selectedDevice, setSelectedDevice] = useState(devices[0]?.id || '');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Tracking</h2>
        <p className="text-gray-600">Real-time location tracking of your devices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Select Device</h3>
            <div className="space-y-2">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedDevice === device.id
                      ? 'bg-blue-50 border border-blue-200 text-blue-700'
                      : 'hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className="font-medium">{device.name}</div>
                  <div className="text-sm text-gray-500">{device.location}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Tracking Controls</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <Crosshair className="w-4 h-4" />
                <span>Refresh Location</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Live Map</span>
              </div>
              <button className="flex items-center space-x-2 px-3 py-1 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Layers className="w-4 h-4" />
                <span className="text-sm">Satellite</span>
              </button>
            </div>
            
            <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Location Tracking</h3>
                <p className="text-gray-600 mb-4">Device location updating in real-time</p>
                <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
                  <p className="text-sm text-gray-600">Current Location:</p>
                  <p className="font-semibold text-gray-900">
                    {devices.find(d => d.id === selectedDevice)?.location || 'Select a device'}
                  </p>
                </div>
              </div>
              
              {/* Simulated map pins */}
              <div className="absolute top-20 left-20 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 right-20 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-32 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};