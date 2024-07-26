import React from 'react'
import HeadLine from './HeadLine'
import Search from './Search'
import MovieContainer from './MovieContainer'

const MainContainer = () => {
  return (
    
    <div className="ml-80 bg-white h-full w-3/4 ">
        <HeadLine/>
        <Search/>
        <MovieContainer/>
    </div>
  )
}

export default MainContainer