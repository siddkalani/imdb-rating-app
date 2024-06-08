import React from "react";
import { Children, createContext, useEffect, useState } from "react";
export const API_URL = `http://www.omdbapi.com/?&apikey=b266755e`

//context
export const MovieContext = createContext({})
//provider
export const AppProvider = ({ children }) => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [error , setError] = useState({
        state:false,
        msg:""
    })
    const [isloading , setIsloading] = useState(false)

    const getMovies = async (url) => {
        // fetching api
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (data.Response === "True") {
                setError({
                    state:false,
                    msg:""
                })
                setIsloading(false)
            } else if(data.Response === "False"){
                if(data.Error === "Incorrect IMDb ID."){
                    setError({
                        state:true,
                        msg:""
                    })
                } 
                } else {
                    setError({
                        state:true,
                        msg:data.Error
                    })
                }
            
            
            console.log(data)
            setMovies(data.Search)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const real = setTimeout(() => {
            getMovies(`${API_URL}&s=${search}`);
        }, 500);
        return ()=>clearInterval(real)
    }, [search])

    return <MovieContext.Provider value={{ movies, search, setSearch ,error,setError,isloading,setIsloading}}>{children}</MovieContext.Provider>
}


//consumer
export default MovieContext