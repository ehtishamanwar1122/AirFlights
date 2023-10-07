import React,{ useEffect} from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
 import Aos from 'aos';
const Info = () => {
 useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='info section'>
      <div data-aos='fade-up' data-aos-duration='2500' className="infoContainer container">
        <div className="titleDiv flex"><h2>Travel To make memories all around the world</h2>
        <button className='btn'>
          View All
        </button>
        </div>

        <div className="cardsDiv grid">
          <div data-aos='fade-up' data-aos-duration='2500' className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can call airlines from and Book plane ticket! </p>
          </div>
        
          <div className="cardsDiv grid">
          <div data-aos='fade-up' data-aos-duration='3500' className="singleCard grid">
            <div className="iconDiv colorOne flex">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>You can call airlines from and Book plane ticket! </p>
          </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className="singleCard grid">
            <div className="iconDiv colorTwo grid">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardTitle">Save More</span>
            <p>You can also call from Phone and Book flight Ticket! </p>
          </div>


            
        </div>
      </div>
      
    </div>
  )
}

export default Info
