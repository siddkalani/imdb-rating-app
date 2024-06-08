import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const Home = () => {
  const {movies} = useContext(MovieContext);
  console.log(movies)

  return (
    <section>
    <div>
      {}
    </div>
    </section>
  )


}

export default Home