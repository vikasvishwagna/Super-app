import React, { useState } from 'react'
import Box from "../../components/Box"
import Chip from "../../components/chip"
import NextPage from '../../components/NextPage'



const MOVIES = [
  { id: 0, category: "Action"},
  { id: 1, category: "Drama"},
  { id: 2, category: "Romance"},
  { id: 3, category: "Thriller" },
  { id: 4, category: "Western" },
  { id: 5, category: "Horror" },
  { id: 6, category: "Fantasy" },
  { id: 7, category: "Fiction" },
  { id: 8, category: "Music" },
]
function Gener() {
  
  const [selectedMovies, setSelectedMovies] = useState([]);
  return (
    <div>
      <p className='title'>Super app</p>
      <p className='discription'>Choose your entertainment category</p>
      
      {/* movie boxes */}
      <div className='movie-grid'>
        {MOVIES.map((movie)=>{
          return(
            <Box data={movie} key={movie.id} 
            selectedMovies={selectedMovies}
            setSelectedMovies={setSelectedMovies}/>
          )
        })}
      </div>

      <p style={{color:"red"}}>{selectedMovies.length < 3 ? "Minimum 3 category required" : null }</p>

        {/* selected boxes */}
      {selectedMovies.length > 0 ? selectedMovies.map((movieCategory)=>{
        return(
          <Chip data={movieCategory} selectedMovies={selectedMovies}
          setSelectedMovies={setSelectedMovies} />
        )
      }):null}

      <NextPage selectedMovies={selectedMovies}/>
      

    </div>
  )
}

export default Gener