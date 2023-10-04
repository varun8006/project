import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Cradit from './Cradit';

const Cmenquirylist = () => {
  const [user, setUser] = useState([]);
  async function fetchuser() {
    const result = await axios.get("http://localhost:8080/user")
    setUser(result.data)
  }
  useEffect(() => {
    fetchuser();
  }, [])

  return (
    <div>
      <div className='content'>
        <Cradit />
        <div className="card">
        
        <h5 className="card-header text-center">Enquiry List</h5>

          <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Address </th>
                <th scope="col">Date Of Birth </th>
                <th scope="col">Aadhar Number </th>
                <th scope="col">Pan Card Number</th>
                <th scope="col">Cibile Score</th>



              </tr>
            </thead>
            <tbody>
              {
                user.map(obj => {
                  return (
                    <tr key={obj.id}>
                      <td>{obj.id}</td>
                      <td>{obj.firstname}</td>
                      <td>{obj.lastname}</td>
                      <td>{obj.email}</td>
                      <td>{obj.dateofbirth}</td>
                      <td>{obj.uidnumber}</td>
                      <td>{obj.pannumber}</td>
                      <td><NavLink to="/Oeadmin/Cibile"><button  type='submit'className='primary'> Cibile </button></NavLink> </td>
                    </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cmenquirylist