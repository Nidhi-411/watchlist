import React, { useState } from 'react';

const Auth = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(email);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg relative w-full max-w-md mx-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
