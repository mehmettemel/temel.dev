import React, { Children } from 'react';

const Container: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen p-10 dark:bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-white">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
