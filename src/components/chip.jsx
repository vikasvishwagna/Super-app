import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function chip({data, selectedMovies, setSelectedMovies}) {
  function handleClick(){
   setSelectedMovies(selectedMovies.filter((category)=>{
    return category !== data
   }))
  }
  return (
    <div style={{
      border: "1px solid black",
      padding: "5px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }} >
      {data}

      <div style={{cursor:"pointer"}} onClick={handleClick}>
      <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  )
}

export default chip

// setSelectedMovies((prev)=>prev.filter((removeCatogery)=>
//   removeCatogery !== data
// ))