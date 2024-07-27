import React from 'react'
import { useDispatch } from 'react-redux';
import { resetMovies } from '../utils/listSlice'; // Adjust the path as necessary


const User = () => {

 const dispatch = useDispatch();
  const handleHomeClick = () => {
    dispatch(resetMovies());
  };

  return (
    <div className="flex flex-row bg-gray-300 items-center py-2 mx-2 text-black border rounded-md">
        <div>
        <img
          className="h-8 px-5 "
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        </div>
        <div className='w-1/2 px-2'> Guest</div>
        <div className='px-2'>
          <button>Login</button>
        </div>
        <div className="bg-red-500 text-black rounded-md p-1 border-black">
          <button onClick={handleHomeClick}>Home</button>
       </div>
    </div>
  )
}

export default User 