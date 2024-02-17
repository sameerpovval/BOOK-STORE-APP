import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';



const backButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-sky-800 text-white px-4 py-1 roundend-lg w-fit'>
        <BsArrowLeft className='text-2xl'/>
      </Link>
    </div>
  )
}

export default backButton
