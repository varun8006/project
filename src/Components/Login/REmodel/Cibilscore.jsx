import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GrDownload } from 'react-icons/gr'
import { AiOutlineDelete } from 'react-icons/ai'
import { SiGoogleforms } from 'react-icons/si'



import axios from 'axios';


import Regional from '../REmodel/Regional'

const Cibilscore = () => {
 const [user, setUser] = useState([]);
 async function fetchstudent() {
  const result = await axios.get("http://localhost:8080/cibil")
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
        <th scope="col">Cibile Score</th>
        <th scope="col">Cibil score Date</th>
        <th scope="col">status</th>
        <th scope="col">Remark </th>
        <th scope="col">Registration </th>
        <th scope="col">Document</th>
        <th scope="col">Delete</th>

       </tr>
      </thead>
      <tbody>
       {
        user.map(obj => {
         return (
          <tr key={obj.id}>
           <td>{obj.id}</td>
           <td>{obj.cibilscore}</td>
           <td>{obj.cibilscoredate}</td>
           <td>{obj.status}</td>
           <td>{obj.remark}</td>

           <td><NavLink to={`/readmin/regional/cibild/registration`}><button type="button" className="secondary2"><SiGoogleforms /></button></NavLink></td>

           <td><NavLink to={`/cmadmin/cmenquirylist/uplode`}><button type="button" className="secondary2"><GrDownload /></button></NavLink></td>

           <td><NavLink to={`/readmin/regional/cibild/${obj.id}`}><button type="submit" className="secondary2"><AiOutlineDelete /></button></NavLink></td>
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

export default Cibilscore