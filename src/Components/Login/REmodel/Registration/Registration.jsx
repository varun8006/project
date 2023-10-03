import React from 'react'
import Regional from '../Regional'

 const Registration = () => {
  return (
    <div className='content'>
      <Regional />
      <div className="card">
      <h5 className="card-header text-center">Enquiry Form</h5>
        <div className="card-body">
        <form >
            <div>
              <div class="col-12">
                <label htmlFor="firstname" class="col-sm-12 col-form-label">First Name</label>
                <input type="text" name='firstname' class="form-control" id="firstname" />

                <label htmlFor="lastname" class="col-sm-12 col-form-label">Last Name</label>
                <input type="text" name='lasttname' class="form-control" id="lastname"  />


                <label htmlFor="email" class="col-sm-12 col-form-label">Email Address</label>
                <input type="email" name='email' class="form-control" id="email" />

                <label htmlFor="dateofbirth" class="col-sm-12 col-form-label">Date of Birth</label>
                <input type="text" name='dateofbirth' class="form-control" id="dateofbirth"  /> 


                <label htmlFor="uidnumber" class="col-sm-12 col-form-label">Aadhar Number</label>
                <input type="number" name='uidnumber' class="form-control" id="uidnumber" />

                <label htmlFor="pannumber" class="col-sm-12 col-form-label">Pan Card Number</label>
                <input type="number" name='pannumber' class="form-control" id="pannumber" />

                
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
  )
}

export default Registration










