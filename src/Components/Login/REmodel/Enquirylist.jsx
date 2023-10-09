import React, { useState, useEffect } from 'react'
import Regional from '../REmodel/Regional'
import './Re.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { GrDocumentUpdate } from "@react-icons/all-files/gr/GrDocumentUpdate";
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";

const Enquirylist = () => {
  const [user, setUser] = useState([]);
  async function fetchstudent() {
    const result = await axios.get("http://localhost:8080/user")
    setUser(result.data)
  }
  useEffect(() => {
    fetchstudent();
  }, [])

  return (
    <div>
        <Regional />
      <div className='content'>
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
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                

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

                      <td><NavLink to={`/readmin/regional/update/${obj.id}`}><button type="button" className="secondary2"><GrDocumentUpdate/></button></NavLink></td>
                      
                      <td><NavLink to={`/readmin/regional/delete/${obj.id}`}><button type="button" className="secondary2"><AiOutlineDelete/></button></NavLink></td>
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

export default Enquirylist