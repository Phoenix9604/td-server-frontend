import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1>Welcome, {user?.email || 'Guest'}</h1>
      {/* Dashboard components here */}
    </div>
  );
}