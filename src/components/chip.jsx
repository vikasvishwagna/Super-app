import React from 'react'

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
        X
      </div>
    </div>
  )
}

export default chip

// setSelectedMovies((prev)=>prev.filter((removeCatogery)=>
//   removeCatogery !== data
// ))