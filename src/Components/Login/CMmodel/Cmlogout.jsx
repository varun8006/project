import React from 'react'
import Cradit from './Cradit'
import { NavLink } from 'react-router-dom'


const Cmlogout = () => {
  return (
    <div className='content'>
      <Cradit/>
      <div className="card">
        <h5 className="card-header text-center">Operational Executive</h5>
        <div className="card-body">
          <h5 className="card-title text-center">Are You sure You want to logout.</h5>

         <NavLink to="/login">
          <button type="submit" className="primary offset-3 col-4">Logout</button>
          </NavLink>

          <NavLink to="/Oeadmin">
            <button type="reset" className="secondary mt-4  mb-4 offset-2 col-4">Cancel</button>
          </NavLink>




        </div>

      </div>
    </div>

  )
}

export default Cmlogout