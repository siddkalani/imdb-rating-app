import React from 'react'
import { useParams } from 'react-router-dom';
import { Children, createContext, useEffect, useState } from "react";
import { API_URL } from '../context/MovieContext';
import { IoIosArrowBack } from "react-icons/io";
import save from "./save.svg"
import { Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import { BsTicketPerforated } from "react-icons/bs";

const SingleMovie = () => {

  const { id } = useParams();

  const [single, setSingle] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [isActive , setIsActive] = useState('Plot')

  const handleChange = (change) =>{
    setIsActive(change)
  }



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
  const genre = single.Genre
  if (isloading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-white bg-[#242A32] text-[1rem]">
        <h1>...take a break take kitkat</h1>
      </div>
    )
  }
  return (
    <div className='flex w-screen h-screen bg-[#242A32]'>
      <section className='w-full h-full flex justify-center'>
        <div className='text-white mt-3 w-full flex flex-col gap-5 items-center'>
          {/* header */}
          <div className='w-[90%] flex justify-between items-center'>
            <Link to={`/`}> <IoIosArrowBack className='size-[1.5rem]' /> </Link>
            <h1 className='text-[1.5rem]'>Detail</h1>
            <img src={save} alt="" className='size-[1.5rem]' />
          </div>
          {/* image */}
          <div className='w-[90%] h-[40%] flex justify-center '>
            <img src={single.Poster} alt="" className='w-full rounded-b-2xl border-none' />
            {console.log(single)}
          </div>
          {/* title */}
          <div className='w-[90%] flex flex-col'>
            <p className='text-center text-[1.5rem] font-semibold'>{single.Title}</p>
            <div className='flex items-center justify-center text-[#92929D]'>
              <span className='flex items-center gap-x-1'><SlCalender /> {single.Year}</span> <hr className='rotate-90 w-[5%] border-[#92929D]' />
              <span className='flex items-center gap-x-1'><MdAccessTime /> {single.Runtime}</span> <hr className='rotate-90 w-[5%] border-[#92929D]' />
              <span className='flex items-center gap-x-1'><BsTicketPerforated />{genre}</span>
            </div>
          </div>
          {/* content */}
          <div className='w-[90%] flex flex-col gap-5'>
            <ul className='flex w-full justify-around text-[1.5rem]'>
              <li onClick={()=> handleChange('Plot')} className="">Plot <hr className={`${isActive === 'Plot' ? "w-[100%] border-[#92929D] border-2 ease-in-out": "hidden" }`}/></li> 
              <li onClick={()=> handleChange('Awards')} className=''>Awards <hr className={`${isActive === 'Awards' ? "w-[100%] border-[#92929D] border-2 ease-in-out":"hidden" }`}/></li>
              <li onClick={()=> handleChange('Cast')} className=''>Cast <hr className={`${isActive === 'Cast' ? "w-[100%] border-[#92929D] border-2 ease-in-out":"hidden" }`}/></li>
            </ul>
            <div className='text-[1.5rem]'>
             <p className={`${isActive === 'Plot' ? "w-[100%] ": "hidden"}`}> {single.Plot} </p> 
             <p className={`${isActive === 'Awards' ? "w-[100%]":"hidden" }`}>{single.Awards} </p> 
             <p className={`${isActive === 'Cast' ? "w-[100%]":"hidden" }`}>{single.Actors} </ p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleMovie