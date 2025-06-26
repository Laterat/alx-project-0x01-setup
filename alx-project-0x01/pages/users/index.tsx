import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4 space-y-4">
        <h2 className="text-2xl font-semibold">Users</h2>
        <Button title="Click me" onClick={() => alert('Button clicked!')} />
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;
