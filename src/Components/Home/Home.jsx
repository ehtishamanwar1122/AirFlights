import React, {useEffect} from 'react'
import plane from '../../assests/plane.png';
import time from '../../assests/Cloud.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='home flex container'>
     <div className="mainText">
      <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-Lasting Memories With Us</h1>
     </div>
     <div className="homeImages flex">
      <div className="videoDiv">
        <video src={time} autoPlay muted loop  className='video'></video>
        <img src={plane} className='plane'  />
      </div>
     </div>
      
    </div>
  )
}

export default Home
