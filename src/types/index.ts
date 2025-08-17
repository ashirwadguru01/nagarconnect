export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'citizen' | 'admin';
}

export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  location: string;
  images?: string[];
  submittedBy: string;
  submittedAt: Date;
  assignedTo?: string;
  resolvedAt?: Date;
  comments: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: Date;
}