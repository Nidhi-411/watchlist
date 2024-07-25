import React from 'react'

const User = () => {
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
        <div className='px-2'>...</div>
        <div className='px-2'>Home</div>
    </div>
  )
}

export default User