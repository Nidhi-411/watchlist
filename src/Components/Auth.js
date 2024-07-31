import React, { useState } from "react";
import { setWatchlist } from '../utils/watchlistSlice';
import { useDispatch } from 'react-redux'; 



const Auth = ({ onLogin, onClose, topmessage }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
    
      const storedWatchlists = JSON.parse(localStorage.getItem('watchlists')) || {};
      const userWatchlist = storedWatchlists[email] || [];
      dispatch(setWatchlist({ email, watchlist: userWatchlist }));
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
        <p className="py-2 font-bold">{topmessage}</p>
        <p>Enter your Email</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eg. abc@gmail.com"
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
