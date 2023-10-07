import React,{useEffect} from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {RiAccountPinCircleLine} from 'react-icons/ri';
import {SlCalender} from 'react-icons/sl';
import Aos from 'aos';

const Search = () => {
useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='search container section'>
    <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">
      <div className="btns flex">
        <div className="singleBtn">
          <span>Economy</span>
        </div>
        <div className="singleBtn">
        Business Class
        </div>
        <div className="singleBtn">
          First Class
        </div>
      </div>
      <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
      <div className="singleInput flex">
                <div className="iconDiv">
                    <HiOutlineLocationMarker className='icon'/>
                 </div>

                  <div className="texts">
                    <h4 className='h4'>Location</h4>
                    <input className='input' type="text" placeholder='where do you want to go?' />
                  </div>
        </div>
        <div className="singleInput flex">
                <div className="iconDiv">
                    <RiAccountPinCircleLine className='icon'/>
                </div>

                  <div className="texts">
                    <h4>Travelers</h4>
                    <input className='input' type="text" placeholder='Add Guests' />
                  </div>
        </div>

        <div className="singleInput flex">
                <div className="iconDiv">
                    <SlCalender className='icon'/>
                </div>

                  <div className="texts">
                    <h4>Check-In</h4>
                    <input className='input' type="text" placeholder='Add Date' />
                  </div>
        </div>

        <div className="singleInput flex">
                <div className="iconDiv">
                    <SlCalender className='icon'/>
                </div>

                  <div className="texts">
                    <h4>Check-Out</h4>
                    <input className='input' type="text" placeholder='Add Date' />
                  </div>
        </div>
        <button className="btn btnBlock flex">
        Search Flights
        </button>
      </div>
    </div>
    
    </div>
  )
}

export default Search
