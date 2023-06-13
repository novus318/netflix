import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className='content'> 
        <h1 className='title'>Movie Name</h1>
        <div className='banner-button'>
          <button className='b-button'>Play</button>
          <button className='b-button'>My list</button>
        </div>
        <div>
          <h2 className='discription'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </h2>
        </div>
        <div className="fade"></div>
      </div>
    </div>
  )
}

export default Banner;
