@@ .. @@
 import React, { useState } from 'react';
-import { FileText, Users, BarChart3, Settings, Plus, Search, Filter, Bell } from 'lucide-react';
+import { FileText, Users, BarChart3, Settings, Plus, Search, Filter, Bell, User } from 'lucide-react';
+import { UserProfile } from './components/UserProfile';
 import './index.css';
 
 function App() {
-  const [activeTab, setActiveTab] = useState('complaints');
+  const [activeTab, setActiveTab] = useState('profile');
+
+  // Mock user data
+  const currentUser = {
+    id: 'user-123',
+    name: 'Rajesh Kumar',
+    email: 'rajesh.kumar@email.com',
+    phone: '+91 98765 43210',
+    address: '123 MG Road, Bangalore, Karnataka 560001',
+    role: 'citizen' as const
+  };
 
   const mockComplaints = [
@@ .. @@
           <nav className="space-y-2">
             <button
+              onClick={() => setActiveTab('profile')}
+              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
+                activeTab === 'profile' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
+              }`}
+            >
+              <User className="w-5 h-5 mr-3" />
+              Profile
+            </button>
+            <button
               onClick={() => setActiveTab('complaints')}
@@ .. @@
         <main className="flex-1 p-8">
+          {activeTab === 'profile' && (
+            <div>
+              <div className="mb-8">
+                <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
+                <p className="text-gray-600">Manage your account information and view your activity</p>
+              </div>
+              <UserProfile user={currentUser} />
+            </div>
+          )}
+
           {activeTab === 'complaints' && (