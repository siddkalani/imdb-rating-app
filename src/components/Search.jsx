import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const Search = () => {

  const { setSearch, search, error, setIsloading } = useContext(MovieContext)

  const handleChange = (e) => {

    setSearch(e.target.value)
    setIsloading(true)

  }

  return (
    <div className='w-full flex flex-col gap-5 scroll-transparent'>
      <header className='font-bold text-[1.5rem] text-white'>What do you want to watch?</header>
      <div className='w-full flex flex-col items-center gap-1 justify-center'>
        {/* search-bar */}
        <input type="text"
          className='bg-[#3A3F47] h-[42px] rounded-[1rem] p-5 w-full outline-none text-white'
          placeholder='Search'
          value={search}
          onChange={handleChange}
        />
        {/* error handle message */}
        <p className='text-red-500'> {error.show && error.msg} </p>

      </div>
    </div>

  )
}

export default Search