import React from 'react';
import aquamanImage from '/assets/images/aquaman.jpg'

function Banner() {
  return (
    <div className=' flex items-end h-[20vh] md:h-[70vh] bg-no-repeat bg-cente bg-cover' style={{backgroundImage: `url(${aquamanImage})`}} >
      <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4' >Aquaman and the Lost Kingdom</div> 
    
    </div>
  )
}

export default Banner