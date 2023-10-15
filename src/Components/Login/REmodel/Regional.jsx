import React from 'react'

import { NavLink } from 'react-router-dom'
import { FiFilePlus } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';

import "./Regional.css"





const Regional = () => {
  return (
    <div>

      <div className="sidebar">

        <div className='heading text-center'>
          <NavLink className="top" to="/readmin"><h6>Regional Executive
          </h6> </NavLink>

        </div>



        <div className='d-inline'>
          <NavLink className="admin" to="/readmin/regional/enquiry">
            <div className='d-inline p-2' id='icon'>
              <FiFilePlus />
            </div>
            Enquiry Form</NavLink>
        </div>


        <div className='d-inline'>
          <NavLink className="admin" to="/readmin/regional/enquirylist">
            <div className='d-inline p-2' id='icon'>
              <FiFileText />
            </div>
            Enquiry List</NavLink>
        </div>


        <div className='d-inline'>
          <NavLink className="admin" to="/readmin/regional/cibilscore">
            <div className='d-inline p-2' id='icon'>
              <FiAward />
            </div>
            Cibil Score</NavLink>
        </div>


        <div className='d-inline'>
          <NavLink className="admin" to="/readmin/regional/logout">
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