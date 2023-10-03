import React from 'react'

import { NavLink } from 'react-router-dom'
import { FiFilePlus } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';





const Regional = () => {
  return (
    <div>

      <div className="sidebar">

        <div className='heading text-center'>
          <NavLink className="top" to="/admin"><h6>Regional Executive
          </h6> </NavLink>

        </div>



        <div className='d-inline'>
          <NavLink className="admin" to="/admin/regional/enquiry">
            <div className='d-inline p-2' id='icon'>
              <FiFilePlus />
            </div>
            Enquiry Form</NavLink>
        </div>


        <div className='d-inline'>
          <NavLink className="admin" to="/admin/regional/enquirylist">
            <div className='d-inline p-2' id='icon'>
              <FiFileText />
            </div>
            Enquiry List</NavLink>
        </div>


        <div className='d-inline'>
          <NavLink className="admin" to="/admin/regional/cibilscore">
            <div className='d-inline p-2' id='icon'>
              <FiAward />
            </div>
            Cibil Score</NavLink>
        </div>


        <div className='d-inline'>
          <NavLink className="admin" to="/admin/regional/logout">
            <div className='d-inline p-2' id='icon'>
              <FiLogOut />
            </div>
            Logout</NavLink>
        </div>



      </div>


    </div>


  )
}

export default Regional