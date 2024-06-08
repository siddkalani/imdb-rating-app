import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import { NavLink } from "react-router-dom";

const Home = () => {
  const { movies } = useContext(MovieContext)
  console.log(movies)

  return (
        <div>
          {movies.map((movie, index) => {
          <h2> {movie.Title }</h2>
          })}
      </div>   
  )

  
}

export default Home