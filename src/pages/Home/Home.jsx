import React from 'react'
import "./Home.css"

import NavBar from '../../components/NavBar/NavBar.jsx'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'

import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from '../../assets/hero_title.png'
import play_icon from "../../assets/Play_icon.png"
import info_icon from "../../assets/info_icon.png"

const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img'/>
        <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img'/>
            <p>Discovering his ties to a secret ancient order, a young man living in modern Instanbul embarks on a quest to save the city from an immortal enemy</p>
            <div className="hero-btns">
                <button className='btn'>
                    <img src={play_icon} alt="" />
                </button>
                <button className='btn dark-btn'>
                    <img src={info_icon} alt="" />More Info
                </button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">     
        <TitleCards title={"BlockBuster Movies"} category={'now_playing'}/>
        <TitleCards title={"Only on Netflix"} category={'popular'}/>
        <TitleCards title={"Upcomming"} category={'top_rated'}/>
        <TitleCards title={"Top Pics for You"} category={'upcoming'}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
