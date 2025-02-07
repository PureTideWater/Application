import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} Pure Tide. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
