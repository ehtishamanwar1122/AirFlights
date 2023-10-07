import React,{useEffect} from 'react'
import img from '../../assests/S1 (3).jpg'
import Aos from 'aos';
const Lounge = () => {
useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='lounge container section'>
    <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">
      <div className="imgDiv">
        <img className='img'src={img} />
      </div>

      <div className="textDiv">
        <h2>Unaccompained Minor Lounge</h2>
      

      <div className="grids grid">
        <div className="singleGrid">
          <span className="gridTitle">
            Help Through The Airport
           </span>
           <p>
           A tranquil space for travelers to relax, work, and refresh while awaiting flights
           </p>
        </div>


        <div className="singleGrid">
          <span className="gridTitle">
            Priority Boarding
           </span>
           <p>
           An oasis of comfort and amenities, offering a haven for travelers during layovers
           </p>
        </div>


        <div className="singleGrid">
          <span className="gridTitle">
           Care on the Flight
           </span>
           <p>
           A premium retreat where passengers can unwind, access services, and enjoy a seamless travel experience
           </p>
        </div>


        <div className="singleGrid">
          <span className="gridTitle">
           Chauffeur-drive Service
           </span>
           <p>
           A premium retreat where passengers can unwind, access services, and enjoy a seamless travel experience
           </p>
        </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default Lounge;
