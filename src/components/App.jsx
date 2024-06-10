import React from 'react'
import "../index.css"
import Movie from './Movie';
import SingleMovie from './SingleMovie';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Movie/>}/>
        <Route path="singlemovie/:id" element={<SingleMovie/>}/>
       </Routes>
       </BrowserRouter>
    )
}

export default App