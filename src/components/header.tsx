import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Pure Tide</h1>
        <nav>
          <Link href="/">
            <a className="mr-4 hover:underline">Home</a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-4 hover:underline">Dashboard</a>
          </Link>
          <Link href="/products">
            <a className="hover:underline">Products</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
