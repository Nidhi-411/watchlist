import React from 'react'
import User from './User'
import FavList from './FavList'

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-1/4 px-3">

        <div className='py-4 font-bold text-3xl text-center'>WATCHLIST</div>
         <User/>
         <div className="w-full h-0.5 bg-gray-300 my-5"></div>
         <FavList/>
    </div>
  )
}

export default SideBar