import React from 'react'
import "./Cradit.css"
import { NavLink } from 'react-router-dom'

import { FiFileText } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';





const Cradit = () => {
  return (
    <div>

      <div className="sidebar">

        <div className='heading text-center'>
          <NavLink className="top" to="/Oeadmin"><h6>Cradit Manager
          </h6> </NavLink>

        </div>

        <div className='d-inline'>
          <NavLink className="admin" to="/cmadmin/Cmenquirylist">
            <div className='d-inline p-2' id='icon'>
              <FiFileText />
            </div>
            Enquiry List</NavLink>
        </div>
        <div className='d-inline'>
          <NavLink className="admin" to="/cmadmin/cmlogout">
            <div className='d-inline p-2' id='icon'>
              <FiLogOut />
            </div>
            Logout</NavLink>
        </div>


      </div>


    </div>


  )
}

export default Cradit