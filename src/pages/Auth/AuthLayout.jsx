import React from 'react';

function AuthLayout({ children }) {
  const user = true;

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        You are not logged in
      </div>
    );
  }

  return children;
}

export default AuthLayout;
