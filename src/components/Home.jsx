import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { movies, isloading, setSearch } = useContext(MovieContext);
  console.log(movies)

  // loading-state
  if (isloading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-[1rem]">
       <h1>...take a break take kitkat</h1>
      </div>
    )
  }

  // mapped-movie-display
  return (
    <section className='w-full flex items-center justify-center scroll-m-0'>
      <div className=''>
        {movies && movies.length > 0 ? (
          movies.map((currMovie , index) => {
            const { imdbID, Title, Poster } = currMovie;
            return (
              <NavLink to={`singlemovie/${imdbID}`}>

                <div key={imdbID} className='flex items-center flex-col gap-1 mt-4' >

                  {Poster && <img className='rounded-[1rem]' src={Poster} alt={Title} />}

                  <h2 className='text-xl text-white font-[400]'>{Title}</h2>

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