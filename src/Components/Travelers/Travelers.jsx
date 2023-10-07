import React,{useEffect} from 'react'
import pot from '../../assests/potrait1 (1).jpg'
import pot1 from '../../assests/potrait1 (2).jpg'
import pot2 from '../../assests/potrait1 (3).jpg'
import lahore from '../../assests/lahore.jpg'
import naran from '../../assests/naran.jpg'
import gilgit from '../../assests/gilgit.jpg'
import babar from '../../assests/babar.jpeg';
import meadows from '../../assests/meadow.jpg'

import Aos from 'aos';
const travelers =[
  {
    id:1,
    destinationImage:lahore,
    travelerImage:pot,
    travelerName:'Shumaila',
    social:'shum@tech',
  },
  {
    id:2,
    destinationImage:naran,
    travelerImage:pot1,
    travelerName:'Shuazam',
    social:'shaz@tech',
  },
  {
    id:3,
    destinationImage:gilgit,
    travelerImage:pot2,
    travelerName:'Shabir',
    social:'shab@tech',
  },
  {
    id:4,
    destinationImage:meadows,
    travelerImage:babar,
    travelerName:'Babar Azam',
    social:"bobbi@cric",
  },
]

const Travelers = () => {
useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="travelers container section">
      <div data-aos='fade-up' data-aos-duration='2500'className="sectionContainer">
        <h2>
          Top Travelers of this Month!
        </h2>

        <div className="travelersContainer grid">
          {
            travelers.map(({id,destinationImage,travelerImage,travelerName,social})=>{
                return(
                  <>
                  <div key={id} className="singleTraveler">
            <img src={destinationImage} className='destinationImage' />
            <div className="travelersDetails">
              <div className="travelerPicture">
                <img src={travelerImage} className='travelerImage'/>
              </div>
                 <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{social}</p>
                    </div>
                 </div>
                </div>
                  </>
                )
            })
          }


          
          
        </div>
      </div>
    </div>
  )
}

export default Travelers
