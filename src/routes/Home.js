import React from 'react'

import ImgSrc from '../assets/home.jpg'

function Home() {
  console.log("Home");
  return (
    <div>
      <h1>In Home</h1>
      <div>
        <img src={ImgSrc} alt="Example"/>
      </div> 
    </div>
  )
}

export default Home
