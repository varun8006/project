import { React, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Regional from '../Regional'



const Cibild = () => {

    const [cibil, setCibil] = useState({});


    const navigate = useNavigate();
    
    const { userId } = useParams();


    async function fetchuser() {
        const result = await axios.get(`http://localhost:8080/cibil/${userId}`)
        setCibil(result.data[0]);
    }
    useEffect(() => {
        fetchuser()
    },[])

    function deleteuser() {
        axios.delete(`http://localhost:8080/cibil/delete/${userId}`);
        navigate('/readmin/regional/cibilscore');
    }
    return (


        <div className='content'>
      <Regional />
      <form  onSubmit={() => deleteuser()}>

      <div className="card">
        <h5 className="card-header text-center">{cibil.id}</h5>
        <div className="card-body">
          <h5 className="card-title text-center">Are You sure You want to delete.</h5>

        
          <input type='submit' className='primary offset-3' value="YES, Delete It" />
          

          <NavLink to="/readmin/regional/cibilscore">
            <button type="reset" className="secondary mt-4  mb-4 offset-2 col-4">Cancel</button>
          </NavLink>

        </div>

      </div>
      </form>
     
    </div>

       
    );
};

export default Cibild



 