import React,{useEffect} from 'react'
import image from '../../assests/S1 (1).jpg'
import image1 from '../../assests/S1 (2).jpg'
import image2 from '../../assests/S1 (3).jpg'
import Aos from 'aos';
const Support = () => {
useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='support container section'>
     <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer">
      <div className="titlesDiv">
        <small className='small'>Travel Support</small>
        <h2>Plan Your Travel with Confidence</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim reprehenderit aspernatur impedit libero possimus maxime cumque nisi accusamus distinctio nemo voluptas ducimus, expedita quidem, velit cum repudiandae magni quos inventore.</p>
      </div>



      <div className="infoDiv grid">
        <div className="textDiv grid">
          
          <div data-aos='fade-up' data-aos-duration='2500' className="singleInfo">
          <span className="number">01</span>
          <h4>Travel Requirements For Dubai</h4>
          <p className='p'>Travel requirements for Dubai typically include entry visas, passport validity, and compliance with local laws and regulations. Make sure to check with the official authorities or the nearest embassy for the most up-to-date information before your trip.</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='3500'className="singleInfo ">
          <span className="number colorOne">02</span>
          <h4>Multi-Risk Travel Insurance</h4>
          <p className='p'>Multi-risk travel insurance provides comprehensive coverage for various travel-related risks, including trip cancellations, medical emergencies, baggage loss, and more, offering peace of mind during your journeys.</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className="singleInfo ">
          <span className="number colorTwo">03</span>
          <h4>Chauffeur Services at yt</h4>
          <p className='p'>Chauffeur services at YT offer professional and convenient transportation with skilled drivers, ensuring comfortable travel and a luxurious experience.</p>
          </div>
        </div>


      <div className="imgDiv">
        <img className='image0'src={image}  />
        {/* <img className='image1' src={image1}  />
        <img className="image2"src={image2}  /> */}
      </div>
      </div>
     </div>
      
    </div>
  )
}

export default Support
