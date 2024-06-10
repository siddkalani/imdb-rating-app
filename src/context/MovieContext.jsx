import React from "react";
import {createContext, useEffect, useState , useContext} from "react";

export const API_URL = `https://www.omdbapi.com/?&apikey=b266755e`


//context
 const MovieContext = createContext({})
//provider
export const AppProvider = ({ children }) => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("titanic")
    const [error , setError] = useState({
        show:false,
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
                    show:false,
                    msg:""
                })
                setIsloading(false)
                setMovies(data.Search)
            } else if(data.Response === "False"){
                setIsloading(false)
                if(data.Error === "Incorrect IMDb ID."){
                   setError({ 
                    show:true,
                    msg:""})
                    setSearch("")
                } else{
                    setError({
                        show:true,
                        msg:data.Error
                    })
                }
                }

            
        
            
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const real = setTimeout(() => {
            getMovies(`${API_URL}&s=${search}`);
        }, 500);
        return ()=>clearTimeout(real);
    },[search])

    return <MovieContext.Provider value={{ movies, search, setSearch ,error,setError,isloading,setIsloading}}>{children}</MovieContext.Provider>
}
    const useGlobalFunction=()=>{
        return (useContext(MovieContext))
}

//consumer
export {MovieContext , useGlobalFunction}