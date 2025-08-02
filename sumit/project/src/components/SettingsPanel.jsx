import React, { useState } from 'react';
import { User, Bell, Shield, MapPin, Smartphone } from 'lucide-react';

export const SettingsPanel = () => {
  const [activeSection, setActiveSection] = useState('account');

  const sections = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'tracking', label: 'Tracking', icon: MapPin },
    { id: 'devices', label: 'Devices', icon: Smartphone },
  ];

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Eastern Time (ET)</option>
              <option>Central Time (CT)</option>
              <option>Mountain Time (MT)</option>
              <option>Pacific Time (PT)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { label: 'Device Location Updates', description: 'Get notified when device location changes' },
            { label: 'Security Alerts', description: 'Immediate alerts for security events' },
            { label: 'Battery Warnings', description: 'Notifications when device battery is low' },
            { label: 'Geo-fence Alerts', description: 'Alerts when devices leave safe zones' },
            { label: 'Weekly Reports', description: 'Summary of device activity and security' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button className="w-10 h-6 bg-blue-600 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
              Enabled ✓
            </button>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Auto-Lock Timeout</h4>
            <p className="text-sm text-gray-600 mb-3">Automatically lock devices after inactivity</p>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>5 minutes</option>
              <option>10 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
            </select>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Emergency Contacts</h4>
            <p className="text-sm text-gray-600 mb-3">People to notify in case of security incidents</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Manage Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'account': return renderAccountSettings();
      case 'notifications': return renderNotificationSettings();
      case 'security': return renderSecuritySettings();
      default: return renderAccountSettings();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account, security, and notification preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {renderContent()}
            
            <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};