import React from 'react';
import { User, Mail, Phone, MapPin, Shield, Calendar } from 'lucide-react';
import { ProfileVisitsCard } from './ProfileVisitsCard';
import { useProfileVisits } from '../hooks/useProfileVisits';

interface UserProfileProps {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: 'citizen' | 'admin';
  };
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const { visits, lastVisited, incrementVisits, resetVisits } = useProfileVisits(user.id);

  const getRoleBadgeColor = (role: string) => {
    return role === 'admin' 
      ? 'bg-purple-100 text-purple-800 border-purple-200' 
      : 'bg-green-100 text-green-800 border-green-200';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Main Profile Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getRoleBadgeColor(user.role)}`}>
                <Shield className="w-4 h-4 inline mr-1" />
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </span>
            </div>
            
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{user.address}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Member since January 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Visits Card */}
      <ProfileVisitsCard
        visits={visits}
        lastVisited={lastVisited}
        onIncrementVisits={incrementVisits}
        onResetVisits={resetVisits}
      />

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Complaints Filed</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="text-gray-600">Resolved Issues</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
            <div className="text-gray-600">Pending Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};