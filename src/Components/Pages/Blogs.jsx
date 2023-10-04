import React from 'react'
import Footer from './footer'


import img2 from '../Asset/blog/2.jpg'
import img3 from '../Asset/blog/3.jpg'
import img4 from '../Asset/blog/4.jpg'

import img6 from '../Asset/blog/6.jpg'
import img7 from '../Asset/blog/7.jpg'

import img9 from '../Asset/blog/9.jpg'



import img13 from '../Asset/blog/13.jpg'

import img15 from '../Asset/blog/15.jpg'
import img16 from '../Asset/blog/16.jpg'
import img17 from '../Asset/blog/17.jpg'
import img18 from '../Asset/blog/18.jpg'
import img19 from '../Asset/blog/19.jpg'
import img20 from '../Asset/blog/20.jpg'
import Navbar from '../Navbar/Navbar'

const Blogs = () => {
  return (
    <>
     <div  className="row justify-content-evenly">
      <Navbar/>
      <div className="container text-left">
        <div className="row align-items-end">

          <div className="col-3">
            <img src={img2} className="d-block w-100" alt="img" />
            
            
          </div>
          <div className="col-3">
            <img src={img3} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img4} className="d-block w-100" alt="img" />
          </div>

          <div className="col-3">
            <img src={img6} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img7} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img9} className="d-block w-100" alt="img" />
          </div>

          <div className="col-3">
            <img src={img13} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img15} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img16} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img17} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img18} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img19} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img20} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img13} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img15} className="d-block w-100" alt="img" />
          </div>
          <div className="col-3">
            <img src={img16} className="d-block w-100" alt="img" />
          </div>

        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
   
  )
}

export default Blogs;