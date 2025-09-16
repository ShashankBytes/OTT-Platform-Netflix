import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cards_data from "../../assets/cards/Cards_data.js"
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
  const cardsRef =useRef();
  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }

  const [apiData,setApiData]=useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION}`
    }
  };

  useEffect(()=>{

    const categoryUrl=`https://api.themoviedb.org/3/movie/${category?category:"top_rated"}?language=en-US&page=1`;

    fetch(categoryUrl, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel)
})
  return (
    <div className='title-cards'> 
      <h2>{title?title:'Popular On Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
