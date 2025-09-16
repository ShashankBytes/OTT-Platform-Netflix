import React, { useEffect, useState } from 'react'
import "./Player.css" 
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const {id}=useParams();
  const navigate=useNavigate();

  const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTRmOWI4MDZhNzgzYTBiNGIzMTVjZTI5ZjUxNzY2MSIsIm5iZiI6MTc1NzMzNTIzOC4xMDA5OTk4LCJzdWIiOiI2OGJlY2VjNjM0Zjc1ZDFlM2U5OGM0NzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FZhKZSF3xsP0-NFDKho-GNTdkJOPuoZbBO-mnHaS7vo'
    }
  };

  useEffect(()=>{
    const url=`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    fetch(url, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : "N/A"}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
