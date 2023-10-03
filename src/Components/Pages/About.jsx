import React from 'react'
import img from '../Asset/About/about.jpg'
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
      <div class="row justify-content-evenly">
        <div class="col-4">
          <div class="inner-column">
            <div class="sec-title">
              <div class="title">about us</div>
              <h2>Car insurance rate reductions up to 25%</h2>
            </div>
            <div class="bold-text">
              We are a professional and creative company and we offer you
              a trusty insurance on your veicle.
            </div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when ang dummy
              text lorem.
            </div>
          </div>
        </div>
        <div class="col-4">
          <div>

          <img src={img} class="d-block w-100" alt="img" />
          </div>
        </div>
      </div>

    </>
  )
}

export default About;