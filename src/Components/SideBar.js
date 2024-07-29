import React from 'react';
import Watchlist from './Watchlist';
import { useDispatch } from 'react-redux';
import { resetMovies } from '../utils/listSlice'; // Adjust the path as necessary
import { useState } from 'react';

const SideBar = ({ user, onLogout, onLogin }) => {
  const [showWatchlist, setShowWatchlist] = useState(false);

  const toggleWatchlist = () => {
    setShowWatchlist(!showWatchlist);
  };

  const dispatch = useDispatch();
  const handleHomeClick = () => {
    dispatch(resetMovies());
  };

  return ( 
     
    <div className="fixed top-0 flex md:flex:row flex-col left-0 md:left-auto  h-16 w-screen md:w-1/4 md:h-screen bg-gray-800 text-white  md:items-start p-2">
      <div className="py-2 md:py-4 font-bold text-lg md:text-3xl text-center ">WATCHLIST</div>

      {/* User login and homepage */}
      <div className="flex flex-row border  border-gray-800 items-center w-full bg-gray-300 py-2 px-2 md:py-4 md:px-4 text-black rounded-md md:my-2">
        <img className=" h-6 md:h-8 md:px-2" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        <div className=" w-0 h-0 md:w-auto md:h-auto flex-grow md:flex-grow-0 md:px-2 hidden md:block">User</div>
        <div className=" ml-1 flex-1 text-right">
          {user ? (
            <button className="md:bg-red-600 text:black md:text-white px-1 py-1 md:px-2 md:py-2 rounded-md" onClick={onLogout}>Logout</button>
          ) : (
            < button className="md:bg-green-600 text-black md:text-white px-1 py-1 md:px-2 md:py-2 rounded-md" onClick={onLogin}>Login</button>
          )}
        </div>
        <div className=" m-1 md:ml-2  w-1/5 md:w-auto text-right">
          <button className="md:bg-red-500 text-black md:text-white md:px-2 md:py-1 rounded-md" onClick={handleHomeClick}>Home</button>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-300 md:my-4 hidden md:block"></div>

      <button
        className="bg-blue-500 p-1 text-white md:px-4 md:py-2 rounded md:mt-2 mt-0 w-autho "
        onClick={toggleWatchlist}
      >
        My Watchlist
      </button>

      <div className={`${showWatchlist ? 'block' : 'hidden'} md:block w-full mt-1 md:mt-4`}>
        <Watchlist />
      </div>
    </div>
  );
};

export default SideBar;
