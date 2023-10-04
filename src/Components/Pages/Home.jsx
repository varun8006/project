import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './footer'


import './Home.css'

import img from '../Asset/Home/car.png'
import img2 from '../Asset/Home/suv.jpg'
import img3 from '../Asset/Home/Hatchback.jpg'
import img4 from '../Asset/Home/convertable.jpg'
import img5 from '../Asset/Home/Coupes.jpg'
import img6 from '../Asset/Home/choose.jpg'
import img7 from '../Asset/Home/team1.jpg'
import img8 from '../Asset/Home/team2.jpg'
import img9 from '../Asset/Home/team3.jpg'

import { BsArrowDownCircle } from 'react-icons/bs'

import { PiNumberOneBold } from 'react-icons/pi'
import { PiNumberTwoBold } from 'react-icons/pi'
import { PiNumberThreeBold } from 'react-icons/pi'
import { PiNumberFourBold } from 'react-icons/pi'
import { RiEmotionHappyLine } from 'react-icons/ri'





const Home = () => {
  return (
    <>
      <Navbar />
      {/* HEAD PART */}
      <div id="wrap">
        <div id="left">
          <h4 className='heading2'>
            Rev Up Your Dreams with Our Hassle-Free Car Loans !
          </h4>
          <p className='paragraph'>
            Unlock the road to your dream car with our unbeatable car loan offer! Enjoy the lowest interest rates in town, making your dream car more affordable than ever. Flexible repayment terms cater to your budget
          </p>
          <div className='btn'>
            <div>
              <button type="submit" className="primary">Book Now</button>
            </div>
            <div>
              <button type="reset" className="secondary">View </button>
            </div>
          </div>
        </div>
        <div id="right"><img src={img} alt="img" width="800" /></div>
      </div>

      {/* OUR SERVICES */}
      <div className='down'>
        <BsArrowDownCircle />
      </div>

      <div className='color'>
        <div className='one'>
          <div className='two'>

            <p>OUR SERVICES</p>
            <h5 className='three'>We ensure best loan services for our clients.</h5>
          </div>
        </div>
        <div className='one'>

          <div id='box'>
            <img src={img2} alt='car' width="330" />
            <div>SUV Car loan</div>
            <hr></hr>
            <div className='btn1'>
              <button type="submit" className="primary1">Book Now</button>
              <button type="reset" className="secondary2">View </button>
            </div>
          </div>

          <div id='box'>
            <img src={img3} alt='car' width="330" />
            <div>Hatchback Car loan</div>
            <hr></hr>

            <div className='btn1'>
              <button type="submit" className="primary1">Book Now</button>
              <button type="reset" className="secondary2">View </button>
            </div>
          </div>

          <div id='box'>
            <img src={img5} alt='car' width="330" />
            <div>Coupes Car loan</div>
            <hr></hr>

            <div className='btn1'>
              <button type="submit" className="primary1">Book Now</button>
              <button type="reset" className="secondary2">View </button>
            </div>
          </div>

          <div id='box'>
            <img src={img4} alt='car' width="330" />
            <div>Convertable Car loan</div>
            <hr></hr>

            <div className='btn1'>
              <button type="submit" className="primary1">Book Now</button>
              <button type="reset" className="secondary2">View </button>
            </div>
          </div>

        </div>
        <div className='one'>

          <div id='box'>
            <img src={img2} alt='car' width="330" />
            <div>SUV Car loan</div>
            <hr></hr>
            <div className='btn1'>
              <button type="submit" className="primary1">Book Now</button>
              <button type="reset" className="secondary2">View </button>
            </div>
          </div>

          <div id='box'>
            <img src={img3} alt='car' width="330" />
            <div>Hatchback Car loan</div>
            <hr></hr>

            <div className='btn1'>
              <button type="submit" className="primary1">Book Now</button>
              <button type="reset" className="secondary2">View </button>
            </div>
          </div>

          <div id='box'>
            <img src={img5} alt='car' width="330" />
            <div>Coupes Car loan</div>
            <hr></hr>

            <div className='btn1'>
              <button type="submit" className="primary1">Book Now</button>
              <button type="reset" className="secondary2">View </button>
            </div>
          </div>


        </div>


      </div>

      {/*  WHY US */}

      <div className='why'>
        <div className='one'>
          <div className='two'>

            <p>WHY US</p>
            <h5 className='three'>Choose us for unparalleled exceptional service</h5>
          </div>
        </div>

        <div id="wrap2">

          <div id="right"><img src={img6} alt="img" width="600" /></div>

          <div id="left2">
            <h4 className='heading2'>
              Rev Up Your Dreams with Our Hassle-Free Car Loans !
            </h4>
            <p className='paragraph'>
              Unlock the road to your dream car with our unbeatable car loan offer! Enjoy the lowest interest rates in town, making your dream car more affordable than ever. Flexible repayment terms cater to your budget
            </p>
            <ul className='ul1'>
              <li>
                <PiNumberOneBold />. Compare personalized quotes<br></br>
              </li>
              <li>
                <PiNumberTwoBold />. Get all discounts in one place<br></br>
              </li>
              <li>
                <PiNumberThreeBold />. Buy online or on the phone<br></br>
              </li>
              <li>

                <PiNumberFourBold />. Get all discounts in one place<br></br>
              </li>

            </ul>

          </div>

        </div>

      </div>
      {/*  OUR TEAM */}

      <div className='color'>
        <div className='one'>
          <div className='two'>

            <p>OUR TEAM</p>
            <h5 className='three'>We ensure best loan services for our clients.</h5>
          </div>
        </div>
        <div className='one1'>

          <div id='box1'>
            <div>
              <img src={img7} alt='car' width="330" />
            </div>
            <div className='box1'>Ram Patil <br></br>CEO</div>
          </div>

          <div id='box1'>
            <div>
              <img src={img8} alt='car' width="330" />
            </div>
            <div className='box1'>Ram Patil <br></br>CEO</div>
          </div>

          <div id='box1'>
            <div>
              <img src={img9} alt='car' width="330" />
            </div>
            <div className='box1'>Ram Patil <br></br>CEO</div>
          </div>

        </div>


      </div>


      {/*  FEEDBACK */}

      <div className='why1'>
        <div className='one'>
          <div className='two'>

            <p>FEEDBACK</p>
            <h5 className='three'>What Clients Says About us?</h5>

          </div>


        </div>
        <div className='one'>

          <div id='box'>
            <div className="circular-image ">


              < RiEmotionHappyLine />

            </div>

            <div>Varun S. pathak</div>

            <div>Client</div>

            <div className='client'><p>
              I had a fantastic experience using the car loan website - it was user-friendly,I had a fantastic experience using the car loan website  and the loan approval process was quick and hassle-free. Highly recommended
            </p>
            </div>
            <hr></hr>

          </div>

        </div>

      </div>

 {/*  FOOTER */}

  <Footer/>







    </>
  )
}

export default Home;