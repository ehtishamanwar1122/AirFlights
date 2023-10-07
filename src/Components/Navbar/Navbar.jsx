import React, { useState } from 'react';
import   logo from '../../assests/logo.png';
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
import {AiOutlineGlobal} from 'react-icons/ai';
 import {CgMenuGridO} from 'react-icons/cg';
function Navbar() {

const[active,setActive]=useState('navBarMenu');
const showNavBar = () =>{
  setActive('navBarMenu showNavBar');
};
const removeNavBar = () =>{
  setActive('navBarMenu');
};
const[noBg,setNoBg]=useState('navBarTwo');
const addBgColor = () =>{
  if(window.scrollY >=10 ){
    setNoBg('navBarTwo NavBar_With_Bg');
  }
  else{
  setNoBg('navBarTwo ');
  }
};
  window.addEventListener('scroll',addBgColor)


  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <SiConsul />
        </div>
        <div className='none flex'>
          <li className='flex li'><BsPhoneVibrate className='icon' />Support</li>
          <li className='flex li'><AiOutlineGlobal className='icon' />Language </li>
        </div>

        <div className='atb flex'>
          <span>Sign In!!</span>
          <span>Sign Out</span>
        </div>

      </div>

      <div className={noBg}>
        <div className="logo-div">
         <div className='logo'>
          <img src={logo} />
          </div>
        </div>
        <div className={active} onClick={removeNavBar}>
          <ul className='menu flex'>
            <li className='listItem'>Home</li>
            <li className='listItem'>About</li>
            <li className='listItem'>Offers</li>
            <li className='listItem'>Seats</li>
            <li className='listItem'>Destination</li>
          </ul>

          <button  className='btn flex btnOne'>
            Contact
          </button>
           
        </div>

        <div onClick={showNavBar}  className="toggleIcon">
          <CgMenuGridO className='icon'/>
        </div>

      </div>
    </div>
  );
}

export default Navbar
