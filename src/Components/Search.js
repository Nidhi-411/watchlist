import React from 'react'

const Search = () => {
  return (
    <div className="flex justify-center items-center my-8 ">
    
    <input
      className="px-5 w-5/6 border border-gray-400 p-2 rounded-l"
      type="text"
    //   value={searchQuery}
    //   onChange={(e) => setSearchQuery(e.target.value)}
    
    />
    <button className="border border-gray-400 px-5 py-2 rounded-r  bg-gray-100">
      🔍
    </button>
  
  </div>
  )
}

export default Search