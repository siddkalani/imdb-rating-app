import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const Search = () => {

  const {setSearch , search , error } = useContext(MovieContext)
  return (
    <div>
      {/* search-bar */}
      <input type="text"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      {/* error handle message */}
      <span>{error.state & error.msg}</span>
    </div>
  )
}

export default Search