import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import Regional from './Regional'




const User = () => {


  function savedata(data) {
    console.log(data);

    axios.post("http://localhost:8080/user", data);
    alert("data submit");

  }
  const { register, handleSubmit } = useForm();
  return (
  <>

<div className='content'>
      <Regional />
      <div className="card">
      <h5 className="card-header text-center">Enquiry Form</h5>
        <div className="card-body">
        <form onSubmit={handleSubmit(savedata)}>
            <div>
              <div class="col-12">
                <label htmlFor="firstname" class="col-sm-12 col-form-label">First Name</label>
                <input type="text" name='firstname' class="form-control" id="firstname" {...register("firstname")} />

                <label htmlFor="lastname" class="col-sm-12 col-form-label">Last Name</label>
                <input type="text" name='lasttname' class="form-control" id="lastname" {...register("lastname")} />


                <label htmlFor="email" class="col-sm-12 col-form-label">Email Address</label>
                <input type="email" name='email' class="form-control" id="email" {...register("email")} />

                <label htmlFor="dateofbirth" class="col-sm-12 col-form-label">Date of Birth</label>
                <input type="text" name='dateofbirth' class="form-control" id="dateofbirth" {...register("dateofbirth")} /> 


                <label htmlFor="uidnumber" class="col-sm-12 col-form-label">Aadhar Number</label>
                <input type="number" name='uidnumber' class="form-control" id="uidnumber" {...register("uidnumber")} />

                <label htmlFor="pannumber" class="col-sm-12 col-form-label">Pan Card Number</label>
                <input type="number" name='pannumber' class="form-control" id="pannumber" {...register("pannumber")} />

                
                <div className='btn offset-4'>
            <div>
              <button type="submit" class="primary">Submit Now</button>
            </div>
            <div>
              <button type="reset" class="secondary">Reset </button>
            </div>
          </div>

              </div>
            </div>
          </form>
        

        

        </div>

      </div>
    </div>













    
  </>
   

  )
}

export default User