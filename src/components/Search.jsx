import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const Search = () => {

  const {setSearch , search , error,setIsloading } = useContext(MovieContext)

  const handleChange =(e)=>{

      setSearch(e.target.value)
      setIsloading(true)

  }

  return (
    <div>
      {/* search-bar */}
      <input type="text"
      value={search}
      onChange={handleChange}
      />
      {/* error handle message */}
      <p> {error.show && error.msg} </p>
     
    </div>
  )
}

export default Search