import React, { useCallback, useEffect, useState } from 'react'
import Search from './Search'
import Home from './Home'


const Movie = () => {
  return (
    <div>
        <Search />
        <Home />      
    </div>
  )
}

export default Movie