import React from 'react'
import Search from './Search'
import Home from './Home'


const Movie = () => {
  return (
    <div className='flex items-center justify-center bg-[#242A32]'>
      <div className='h-screen w-[90%] overflow-auto mt-3 flex flex-col gap-5 scroll-m-0 scroll-smooth '>
        <Search />
        <Home />
      </div>
    </div>
  )
}

export default Movie