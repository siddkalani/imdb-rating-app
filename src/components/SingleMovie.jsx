import React from 'react'
import { useParams } from 'react-router-dom';
import { Children, createContext, useEffect, useState } from "react";
import { API_URL } from '../context/MovieContext';

const SingleMovie = () => {

  const { id } = useParams();

    const [single, setSingle] = useState([])
    const [isloading , setIsloading] = useState(false)

    const getMovies = async (url) => {
        setIsloading(true)
        // fetching api
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.Response === "True") {
                setIsloading(false)
                setSingle(data)
              }
            
            console.log(data)
            
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const real = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        }, 1000);
    }, [])
    console.log(single)
    if(isloading){
      return(
        <div className='w-full h-full'>...loading</div>
      )
    }
  return (
    <div> 
      <div>{single.Title}</div>
    </div>
  )
}

export default SingleMovie