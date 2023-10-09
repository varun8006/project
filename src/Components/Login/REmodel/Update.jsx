import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Regional from './Regional'

const Update = () => {
  const { userId } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  async function fetchuser() {
    const result = await axios.get(`http://localhost:8080/user/api/${userId}`);

    result.data=result.data[0]

    setValue("firstname", result.data.firstname)
    setValue("lastname", result.data.lastname)
    setValue("email", result.data.email)
    setValue("dateofbirth", result.data.dateofbirth)
    setValue("uidnumber", result.data.uidnumber)
    setValue("pannumber", result.data.pannumber)
    
  
  }
  function savedata(data) {
    axios.put(`http://localhost:8080/user/update/${userId}`, data)
    navigate(`/readmin/regional/enquirylist`)
  }
  useEffect(() => {
    fetchuser()

  }, [])
  return (
    <div className='content'>
      <Regional />
      <div className="card">
      <h5 className="card-header text-center">Enquiry Form</h5>
        <div className="card-body">
        <form onSubmit={handleSubmit(savedata)}>
            <div>
              <div className="col-12">
                <label htmlFor="firstname" className="col-sm-12 col-form-label">First Name</label>
                <input type="text" name='firstname' className="form-control" id="firstname" {...register("firstname")} />

                <label htmlFor="lastname" className="col-sm-12 col-form-label">Last Name</label>
                <input type="text" name='lasttname' className="form-control" id="lastname" {...register("lastname")} />


                <label htmlFor="email" className="col-sm-12 col-form-label">Email Address</label>
                <input type="email" name='email' className="form-control" id="email" {...register("email")} />

               

                <label htmlFor="dateofbirth" className="col-sm-12 col-form-label">Date of Birth</label>
                <input type="text" name='dateofbirth' className="form-control" id="dateofbirth" {...register("dateofbirth")} /> 


                <label htmlFor="uidnumber" className="col-sm-12 col-form-label">Aadhar Number</label>
                <input type="number" name='uidnumber' className="form-control" id="uidnumber" {...register("uidnumber")} />

                <label htmlFor="pannumber" className="col-sm-12 col-form-label">Pan Card Number</label>
                <input type="number" name='pannumber' className="form-control" id="pannumber" {...register("pannumber")} />

                <button type="submit" className="primary mt-4 mb-4 offset-3">Submit</button>
                <button type="reset" className="secondary mt-4  mb-4 offset-2">Reset</button>

              </div>
            </div>
          </form>
        

        

        </div>

      </div>
    </div>
  )
}

export default Update