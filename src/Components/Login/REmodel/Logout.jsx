import React from 'react'
import Regional from '../REmodel/Regional'
import { NavLink } from 'react-router-dom'


const Logout = () => {
  return (
    <div className='content'>
      <Regional />
      <div className="card">
        <h5 className="card-header text-center">Regional Executive</h5>
        <div className="card-body">
          <h5 className="card-title text-center">Are You sure You want to logout.</h5>

         <NavLink to="/login">
          <button type="submit" class="primary offset-3">Logout</button>
          </NavLink>

          <NavLink to="/admin">
            <button type="reset" class="secondary offset-2">Cancel</button>
          </NavLink>

        </div>

      </div>
    </div>

  )
}

export default Logout