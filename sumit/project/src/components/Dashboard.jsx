import React from 'react';
import { DeviceOverview } from './DeviceOverview';
import { LiveTracking } from './LiveTracking';
import { SecurityPanel } from './SecurityPanel';
import { AlertsPanel } from './AlertsPanel';
import { HistoryPanel } from './HistoryPanel';
import { SettingsPanel } from './SettingsPanel';

export const Dashboard = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DeviceOverview />;
      case 'tracking':
        return <LiveTracking />;
      case 'security':
        return <SecurityPanel />;
      case 'alerts':
        return <AlertsPanel />;
      case 'history':
        return <HistoryPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DeviceOverview />;
    }
  };

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  );
};