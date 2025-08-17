import React, { useState } from 'react';
import { FileText, Users, BarChart3, Settings, Plus, Search, Filter, Bell, User } from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('complaints');

  const mockComplaints = [
    {
      id: '1',
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic issues',
      status: 'pending',
      priority: 'high',
      category: 'Infrastructure',
      location: 'Main Street, Block A',
      dateSubmitted: '2024-01-15',
      assignedTo: 'Road Maintenance Dept'
    },
    {
      id: '2',
      title: 'Street Light Not Working',
      description: 'Street light has been out for 3 days',
      status: 'in-progress',
      priority: 'medium',
      category: 'Utilities',
      location: 'Park Avenue, Block B',
      dateSubmitted: '2024-01-14',
      assignedTo: 'Electrical Dept'
    },
    {
      id: '3',
      title: 'Garbage Collection Missed',
      description: 'Garbage not collected for 2 days',
      status: 'resolved',
      priority: 'low',
      category: 'Sanitation',
      location: 'Residential Area C',
      dateSubmitted: '2024-01-13',
      assignedTo: 'Sanitation Dept'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">NagarConnect</h1>
          <p className="text-sm text-gray-600">Municipal Services</p>
        </div>
        
        <div className="p-4">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('complaints')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'complaints' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5 mr-3" />
              My Complaints
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'services' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5 mr-3" />
              Services
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'analytics' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === 'settings' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search complaints, services..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Filter className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">RK</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {activeTab === 'complaints' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">My Complaints</h1>
                  <p className="text-gray-600">Track and manage your submitted complaints</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  New Complaint
                </button>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Complaint
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Priority
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Assigned To
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockComplaints.map((complaint) => (
                        <tr key={complaint.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{complaint.title}</div>
                              <div className="text-sm text-gray-500">{complaint.description}</div>
                              <div className="text-xs text-gray-400 mt-1">{complaint.location}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(complaint.status)}`}>
                              {complaint.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(complaint.priority)}`}>
                              {complaint.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{complaint.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{complaint.dateSubmitted}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{complaint.assignedTo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Available Services</h1>
                <p className="text-gray-600">Access various civic services and applications</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Birth Certificate', description: 'Apply for birth certificate online', icon: '📄' },
                  { title: 'Property Tax', description: 'Pay property tax and view history', icon: '🏠' },
                  { title: 'Water Connection', description: 'Apply for new water connection', icon: '💧' },
                  { title: 'Building Permit', description: 'Apply for construction permits', icon: '🏗️' },
                  { title: 'Trade License', description: 'Apply for business trade license', icon: '🏪' },
                  { title: 'Garbage Collection', description: 'Schedule bulk waste pickup', icon: '🗑️' }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Apply Now →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600">View statistics and insights about civic services</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'Total Complaints', value: '1,234', change: '+12%', color: 'blue' },
                  { title: 'Resolved Issues', value: '987', change: '+8%', color: 'green' },
                  { title: 'Pending Reviews', value: '156', change: '-5%', color: 'yellow' },
                  { title: 'Response Time', value: '2.4 days', change: '-15%', color: 'purple' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Complaint Categories</h3>
                <div className="space-y-4">
                  {[
                    { category: 'Infrastructure', count: 45, percentage: 65 },
                    { category: 'Utilities', count: 32, percentage: 45 },
                    { category: 'Sanitation', count: 28, percentage: 40 },
                    { category: 'Transportation', count: 15, percentage: 25 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.category}</span>
                        <span className="text-gray-900">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
                <p className="text-gray-600">Manage your account preferences and notifications</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        value="rajesh.kumar@email.com" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        value="+91 98765 43210" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h3>
                  <div className="space-y-3">
                    {[
                      'Email notifications for complaint updates',
                      'SMS alerts for urgent matters',
                      'Weekly summary reports',
                      'Service announcements'
                    ].map((item, index) => (
                      <label key={index} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Privacy Settings</h3>
                  <div className="space-y-3">
                    {[
                      'Make my complaints public',
                      'Allow contact from government officials',
                      'Share usage analytics'
                    ].map((item, index) => (
                      <label key={index} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;