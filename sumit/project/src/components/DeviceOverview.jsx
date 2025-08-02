import React from 'react';
import { DeviceCard } from './DeviceCard';
import { StatsCard } from './StatsCard';
import { useDeviceContext } from '../context/DeviceContext';

export const DeviceOverview = () => {
  const { devices } = useDeviceContext();

  const stats = [
    { title: 'Total Devices', value: devices.length, color: 'blue', change: '+2' },
    { title: 'Online Devices', value: devices.filter(d => d.status === 'online').length, color: 'green', change: '0' },
    { title: 'Lost Devices', value: devices.filter(d => d.status === 'lost').length, color: 'red', change: '-1' },
    { title: 'Battery Low', value: devices.filter(d => d.battery < 20).length, color: 'orange', change: '+1' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Device Overview</h2>
        <p className="text-gray-600">Monitor and manage all your connected devices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};