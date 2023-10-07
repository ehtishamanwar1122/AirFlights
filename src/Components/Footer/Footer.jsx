import React,{useEffect} from 'react'
import logo from '../../assests/logo.png';
import {TiSocialFacebook } from 'react-icons/ti'
import {FiTwitter} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {CiLinkedin} from 'react-icons/ci';
import Aos from 'aos';
const Footer = () => {
useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='footer'>
      <div  data-aos='fade-up' data-aos-duration='4500'className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='logo'/>
          </div>
          <p>Your mind Should be stronger than your Feelings,fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <FiTwitter className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <CiLinkedin className='icon'/>
          </div>
        </div>


        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Manage Your Bookings</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Chauffuer</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>
      </div>

      <div  className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="" target='_blank'>Ehtiii@Tech</a></p>
      </div>
    </div>
  )
}

export default Footer;
