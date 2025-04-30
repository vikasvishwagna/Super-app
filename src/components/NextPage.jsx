import React from 'react'
import { useNavigate } from 'react-router-dom';


function NextPage({selectedMovies}) {
  const navigate = useNavigate();
  function handleNavigate(){
    if(selectedMovies.length < 3){
      alert("select minimum 3 categorys to navigate Next Page");
    }else{
      localStorage.setItem("selectedMovie", JSON.stringify(selectedMovies));
      navigate("/movies");
    }
  }
  return (
    <div>
      <button style={{
        cursor:"pointer",
      }} onClick={handleNavigate}>
        Next Page</button>
    </div>
  )
}

export default NextPage