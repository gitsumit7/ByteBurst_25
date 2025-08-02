import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DeviceProvider } from './context/DeviceContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <DeviceProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <div className="flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="flex-1 p-6">
            <Dashboard activeTab={activeTab} />
          </main>
        </div>
      </div>
    </DeviceProvider>
  );
}

export default App;