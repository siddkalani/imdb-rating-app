import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import { NavLink } from 'react-router-dom';

const Home = () => {
  const {movies , isloading ,setSearch} = useContext(MovieContext);
  console.log(movies)

  // loading-state
  if(isloading){
    return(
      <div className="">
        ...loading
      </div>
    )
  }

  // mapped-movie-display
  return (
    <section>
    <div className='main'>
      {movies && movies.length > 0 ? (
        movies.map((currMovie) => {
          const { imdbID, Title, Poster } = currMovie;
          return (
            <NavLink to={`singlemovie/${imdbID}`}>
              <div key={imdbID}>
              <h2>{Title}</h2>
              {Poster && <img src={Poster} alt={Title} />}
            </div>
            </NavLink>
          );
        })
      ) : (
        <p></p>
      )}
      
    </div>
    </section>
  )


}

export default Home