import React from 'react'
//import User from './User'
import Watchlist from './Watchlist'
import { useDispatch } from 'react-redux';
import { resetMovies } from '../utils/listSlice'; // Adjust the path as necessary



const SideBar = ({ user, onLogout, onLogin }) => {
  const dispatch = useDispatch();
  const handleHomeClick = () => {
    dispatch(resetMovies());
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-1/4 bg-gray-800 text-white flex flex-col">

        <div className='py-4 font-bold text-3xl text-center'>WATCHLIST</div>
         {/* user box */}
        <div className="flex flex-row bg-gray-300 items-center py-2 mx-2 text-black border rounded-md">
        <div>
        <img
          className="h-8 px-2 "
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        </div>
        <div className='w-1/3 px-2'> User</div>
        <div className='px-2'>
        {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
        </div>
        <div className="bg-red-500 text-black rounded-md p-1 ml-4 border-black">
          <button onClick={handleHomeClick}>Home</button>
       </div>
    </div>
         <div className="w-full h-0.5 bg-gray-300 my-5"></div>
         <Watchlist/>
    </div>
  )
}

export default SideBar