import React from 'react'

function Box({data, selectedMovies, setSelectedMovies}) {

  function handleClick(){
    if(selectedMovies.includes(data.category)){
      setSelectedMovies(selectedMovies.filter((val)=>val !== data.category))
    }else{
      setSelectedMovies((previous)=>[...previous,data.category]);
    }
  } 
  return (
    <div style={{
      width:"100px",
      height:"100px",
      padding:"10px",
      margin:"10px",
      display:"inline-block",
      border:"1px solid black"
    }} onClick={handleClick}>
      
      {data.category}
    </div>
  )
}

export default Box