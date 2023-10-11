import React, { useState, useEffect } from 'react'

import axios from 'axios';

import Cradit from './Cradit';
import './Cradit.css'
import { NavLink } from 'react-router-dom';
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";


const Cmenquirylist = () => {
  const [user, setUser] = useState([]);
  async function fetchuser() {
    const result = await axios.get("http://localhost:8080/registration")
    setUser(result.data)
  }
  useEffect(() => {
    fetchuser();
  }, [])

  return (
    <div>
      <div className='content'>
        <Cradit />
        <div className="container table-responsive">
        
        <h5 className="card-header text-center">Registration List</h5>

          <table className="table table-hover " >
            <thead>
              <tr>
                <th  className='thead'scope="col">id</th>
                <th className='thead' scope="col">First Name</th>
                <th className='thead' scope="col">Middle Name</th>
                <th className='thead' scope="col">Last Name</th>
                <th className='thead' scope="col">House Number </th>
                <th className='thead' scope="col">Building Number & Name </th>
                <th className='thead' scope="col">Area Name </th>
                <th className='thead' scope="col">City</th>
                <th className='thead' scope="col">Zip Code</th>
                <th className='thead' scope="col">Country</th>
                <th className='thead' scope="col">House Number</th>
                <th className='thead' scope="col">Building Number & Name</th>
                <th className='thead' scope="col">Area Name</th>
                <th className='thead' scope="col">City</th>
                <th className='thead' scope="col">Zip Code</th>
                <th className='thead' scope="col">Country</th>

                <th className='thead' scope="col">Loan Amount</th>
                <th className='thead' scope="col">Tenure</th>
                <th className='thead' scope="col">Paid Amount</th>
                <th className='thead' scope="col">Loan Status</th>
                <th className='thead' scope="col">Remark</th>
                <th className='thead' scope="col">Action</th>


              </tr>
            </thead>
            <tbody>
              {
                user.map(obj => {
                  return (
                    <tr className='thb' key={obj.id}>
                      <td className='thb'>{obj.id}</td>
                      <td className='thb'>{obj.firstname}</td>
                      <td className='thb'>{obj.middlename}</td>
                      <td className='thb'>{obj.lastname}</td>
                      <td className='thb'>{obj.housenumber}</td>
                      <td className='thb'>{obj.buildingnumbername}</td>
                      <td className='thb'>{obj.areaname}</td>
                      <td className='thb'>{obj.city}</td>
                      <td className='thb'>{obj.zippostalcode}</td>
                      <td className='thb'>{obj.conutry}</td>
                      <td className='thb'>{obj.lhousenumber}</td>
                      <td className='thb'>{obj.lbuildingnumbername}</td>
                      <td className='thb'>{obj.lareaname}</td>
                      <td className='thb'>{obj.lzippostalcode}</td>
                      <td className='thb'>{obj.lconutry}</td>
                      <td className='thb'>{obj.loanamount}</td>
                      <td className='thb'>{obj.tenure}</td>
                      <td className='thb'>{obj.paidamount}</td>
                      <td className='thb'>{obj.loanstatus}</td>
                      <td className='thb'>{obj.remark}</td>
                      <td className='thb'>{obj.pandingloan}</td>


                      <td><NavLink to={`/cmadmin/cmenquirylist/regdelete/${obj.id}`}><button type="button" className="secondary2"><AiOutlineDelete/></button></NavLink></td>


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