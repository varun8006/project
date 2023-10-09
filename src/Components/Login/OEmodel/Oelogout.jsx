import React from 'react'
import Operational from './Operational'
import { NavLink } from 'react-router-dom'


const Oelogout = () => {
  return (
    <div className='content'>
      <Operational />
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

export default Oelogout