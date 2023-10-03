import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {GrDownload} from 'react-icons/gr'
import {AiOutlineDelete} from 'react-icons/ai'
import {SiGoogleforms} from 'react-icons/si'



import axios from 'axios';


import Regional from '../REmodel/Regional'

const Cibilscore = () => {
   const [user, setUser] = useState([]);
  async function fetchstudent() {
    const result = await axios.get("http://localhost:8080/cibile")
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

          <table class="table  table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Cibile Score</th>
                <th scope="col">Status</th>
                <th scope="col">Remark</th>
                <th scope="col">date </th>
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
                        <td>{obj.cibilescore}</td>
                        <td>{obj.status}</td>
                        <td>{obj.remark}</td>
                        <td>{obj.cibilescoredate}</td>
                        
                        <td><NavLink to={`/readmin/registration`}><button type="button" class="secondary2"><SiGoogleforms/></button></NavLink></td>

                        <td><NavLink to={`/readmin/uplodedocument`}><button type="button" class="secondary2"><GrDownload/></button></NavLink></td>
                        
                        <td><NavLink to={`/admin/regional/delete/`}><button type="button" class="secondary2"><AiOutlineDelete/></button></NavLink></td>
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