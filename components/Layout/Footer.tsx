import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
      <p>© {currentYear} Developer Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
