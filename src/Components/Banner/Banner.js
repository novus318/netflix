import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/Constants'
import axios from '../../axios';
import React,{ useEffect, useState }from 'react';
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[0])
      setMovie(Response.data.results[0])
    })
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} className='banner'>
      <div className='b-bar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <button className='signin'>Sign In</button>
    </div>
      <div className='content'> 
        <h1 className='title'>{movie ? movie.title:''}</h1>
        <div className='banner-button'>
          <button className='b-button'>Play</button>
          <button className='b-button'>My list</button>
        </div>
        <div>
          <h2 className='discription'>
          {movie ? movie.overview:''}
          </h2>
        </div>
        <div className="fade"></div>
      </div>
    </div>
  )
}

export default Banner;
