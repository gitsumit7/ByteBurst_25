import React, { createContext, useContext, useState } from 'react';

const DeviceContext = createContext(undefined);

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDeviceContext must be used within a DeviceProvider');
  }
  return context;
};

export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([
    {
      id: '1',
      name: 'iPhone 13 Pro',
      type: 'smartphone',
      model: 'Apple iPhone 13 Pro',
      status: 'online',
      location: 'Central Park, New York',
      battery: 85,
      network: 'Verizon 5G',
      lastSeen: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'MacBook Pro',
      type: 'laptop',
      model: 'Apple MacBook Pro 14"',
      status: 'online',
      location: 'Home Office',
      battery: 92,
      network: 'WiFi: Home_5G',
      lastSeen: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'iPad Air',
      type: 'tablet',
      model: 'Apple iPad Air 5th Gen',
      status: 'lost',
      location: 'Coffee Shop, Manhattan',
      battery: 15,
      network: 'T-Mobile 4G',
      lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '4',
      name: 'AirPods Pro',
      type: 'headphones',
      model: 'Apple AirPods Pro 2nd Gen',
      status: 'offline',
      location: 'Last seen: Gym',
      battery: 45,
      network: 'Bluetooth',
      lastSeen: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    },
  ]);

  return (
    <DeviceContext.Provider value={{ devices, setDevices }}>
      {children}
    </DeviceContext.Provider>
  );
};