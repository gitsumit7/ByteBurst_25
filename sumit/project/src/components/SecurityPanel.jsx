import React, { useState } from 'react';
import { Shield, Lock, Trash2, Eye, AlertTriangle } from 'lucide-react';
import { useDeviceContext } from '../context/DeviceContext';

export const SecurityPanel = () => {
  const { devices } = useDeviceContext();
  const [showConfirmation, setShowConfirmation] = useState(null);

  const handleSecurityAction = (action, deviceId) => {
    setShowConfirmation(null);
    // Simulate security action
    console.log(`${action} executed for device ${deviceId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Center</h2>
        <p className="text-gray-600">Protect your devices and data with remote security controls</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {devices.map((device) => (
            <div key={device.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{device.name}</h3>
                  <p className="text-sm text-gray-500">{device.model} • {device.location}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  device.status === 'online' ? 'bg-green-100 text-green-700' :
                  device.status === 'lost' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {device.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => setShowConfirmation(`lock-${device.id}`)}
                  className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Lock className="w-4 h-4" />
                  <span>Remote Lock</span>
                </button>
                
                <button
                  onClick={() => setShowConfirmation(`wipe-${device.id}`)}
                  className="flex items-center justify-center space-x-2 bg-red-50 text-red-700 px-4 py-3 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Wipe Data</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 bg-green-50 text-green-700 px-4 py-3 rounded-lg hover:bg-green-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>Track Mode</span>
                </button>
              </div>

              {showConfirmation === `lock-${device.id}` && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-yellow-800">Confirm Remote Lock</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        This will immediately lock your device and require authentication to unlock.
                      </p>
                      <div className="flex space-x-2 mt-3">
                        <button
                          onClick={() => handleSecurityAction('lock', device.id)}
                          className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-700 transition-colors"
                        >
                          Confirm Lock
                        </button>
                        <button
                          onClick={() => setShowConfirmation(null)}
                          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showConfirmation === `wipe-${device.id}` && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-800">Confirm Data Wipe</h4>
                      <p className="text-sm text-red-700 mt-1">
                        This action is irreversible and will permanently delete all data on the device.
                      </p>
                      <div className="flex space-x-2 mt-3">
                        <button
                          onClick={() => handleSecurityAction('wipe', device.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors"
                        >
                          Confirm Wipe
                        </button>
                        <button
                          onClick={() => setShowConfirmation(null)}
                          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Security Status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Two-Factor Auth</span>
                <span className="text-sm text-green-600 font-medium">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Auto-Lock</span>
                <span className="text-sm text-green-600 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Encryption</span>
                <span className="text-sm text-green-600 font-medium">AES-256</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Backup Status</span>
                <span className="text-sm text-green-600 font-medium">Up to Date</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left">
                Enable Lost Mode (All Devices)
              </button>
              <button className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left">
                Generate Security Report
              </button>
              <button className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left">
                Update Security Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};