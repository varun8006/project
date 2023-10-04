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
              <div className="col-12">
                <label htmlFor="firstname" className="col-sm-12 col-form-label">First Name</label>
                <input type="text" name='firstname' className="form-control" id="firstname" />

                <label htmlFor="lastname" className="col-sm-12 col-form-label">Last Name</label>
                <input type="text" name='lasttname' className="form-control" id="lastname"  />


                <label htmlFor="email" className="col-sm-12 col-form-label">Email Address</label>
                <input type="email" name='email' className="form-control" id="email" />

                <label htmlFor="dateofbirth" className="col-sm-12 col-form-label">Date of Birth</label>
                <input type="text" name='dateofbirth' className="form-control" id="dateofbirth"  /> 


                <label htmlFor="uidnumber" className="col-sm-12 col-form-label">Aadhar Number</label>
                <input type="number" name='uidnumber' className="form-control" id="uidnumber" />

                <label htmlFor="pannumber" className="col-sm-12 col-form-label">Pan Card Number</label>
                <input type="number" name='pannumber' className="form-control" id="pannumber" />

                
                <div className='btn offset-4'>
            <div>
              <button type="submit" className="primary">Submit Now</button>
            </div>
            <div>
              <button type="reset" className="secondary">Reset </button>
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










