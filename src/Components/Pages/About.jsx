import React from 'react'
import img from '../Asset/About/about.jpg'
import Navbar from '../Navbar/Navbar';
import Footer from './footer'


const About = () => {
  return (
    <>
    <Navbar/>
      <div className="row justify-content-evenly">
        <div className="col-4">
          <div className="inner-column">
            <div className="sec-title">
              <div className="title">about us</div>
              <h2>Car insurance rate reductions up to 25%</h2>
            </div>
            <div className="bold-text">
              We are a professional and creative company and we offer you
              a trusty insurance on your veicle.
            </div>
            <div className="text">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when ang dummy
              text lorem.
            </div>
          </div>
        </div>
        <div className="col-4">
          <div>

          <img src={img} className="d-block w-100" alt="img" />
          </div>
        </div>
      </div>
      <div>

      <Footer/>
      </div>

    </>
  )
}

export default About;