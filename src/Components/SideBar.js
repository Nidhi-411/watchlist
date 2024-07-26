import React from 'react'
import User from './User'
import FavList from './FavList'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-1/4 bg-gray-800 text-white flex flex-col">

        <div className='py-4 font-bold text-3xl text-center'>WATCHLIST</div>
         <User/>
         <div className="w-full h-0.5 bg-gray-300 my-5"></div>
         <FavList/>
    </div>
  )
}

export default SideBar