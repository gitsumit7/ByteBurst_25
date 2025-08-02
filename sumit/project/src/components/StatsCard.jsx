import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StatsCard = ({ title, value, color, change }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200'
  };

  const isPositive = change.startsWith('+');
  const isNegative = change.startsWith('-');

  return (
    <div className={`rounded-xl border p-6 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <div className="flex items-center space-x-1 text-sm">
          {isPositive && <TrendingUp className="w-4 h-4" />}
          {isNegative && <TrendingDown className="w-4 h-4" />}
          <span className="font-medium">{change}</span>
        </div>
      </div>
    </div>
  );
};