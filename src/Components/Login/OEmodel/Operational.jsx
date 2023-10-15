import React from 'react'

import { NavLink } from 'react-router-dom'

import { FiFileText } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';





const Operational = () => {
  return (
    <div>

      <div className="sidebar">

        <div className='heading text-center'>
          <NavLink className="top" to="/Oeadmin"><h6>Operational Executive
          </h6> </NavLink>

        </div>

        <div className='d-inline'>
          <NavLink className="admin" to="/Oeadmin/Oeenquirylist">
            <div className='d-inline p-2' id='icon'>
              <FiFileText />
            </div>
            Enquiry List</NavLink>
        </div>
        <div className='d-inline'>
          <NavLink className="admin" to="/oeadmin/oelogout">
            <div className='d-inline p-2' id='icon'>
              <FiLogOut />
            </div>
            Logout</NavLink>
        </div>


      </div>


    </div>


  )
}

export default Operational