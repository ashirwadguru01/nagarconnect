import React from 'react';
import { Eye, Calendar, TrendingUp } from 'lucide-react';

interface ProfileVisitsCardProps {
  visits: number;
  lastVisited: Date | null;
  onIncrementVisits: () => void;
  onResetVisits: () => void;
}

export const ProfileVisitsCard: React.FC<ProfileVisitsCardProps> = ({
  visits,
  lastVisited,
  onIncrementVisits,
  onResetVisits
}) => {
  const formatDate = (date: Date | null) => {
    if (!date) return 'Never';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Eye className="w-5 h-5 mr-2 text-blue-600" />
          Profile Visits
        </h3>
        <div className="flex items-center text-2xl font-bold text-blue-600">
          <TrendingUp className="w-6 h-6 mr-1" />
          {visits}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Last visited: {formatDate(lastVisited)}</span>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={onIncrementVisits}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Simulate Visit
          </button>
          <button
            onClick={onResetVisits}
            className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            Reset Counter
          </button>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <p className="text-xs text-gray-600">
          Profile visits are tracked locally and increment each time someone views your profile.
        </p>
      </div>
    </div>
  );
};