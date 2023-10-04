import React from 'react'
import Regional from '../Regional'

const Uplodedocument = () => {
  return (
    <div className='content'>
      <Regional />
      <div className="card">
        <h5 className="card-header text-center">Enquiry Form</h5>
        <div className="card-body">
          <form >
            <div>
              <div className="input-group mb-3">
                <label htmlFor="firstname" className="col-sm-12 col-form-label">Passport Photo</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>


                <label htmlFor="firstname" className="col-sm-12 col-form-label">Passport Photo</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>



                <label htmlFor="firstname" className="col-sm-12 col-form-label">Passport Photo</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>


                <label htmlFor="firstname" className="col-sm-12 col-form-label">Voter ID Card</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>


                <label htmlFor="firstname" className="col-sm-12 col-form-label">Driving License</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>


                <label htmlFor="firstname" className="col-sm-12 col-form-label">Aadhaar Card</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>


                <label htmlFor="firstname" className="col-sm-12 col-form-label">Bank Statement</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>


                <label htmlFor="firstname" className="col-sm-12 col-form-label">Salary Slip</label>
                <input type="file" className="form-control" id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>




              </div>
              <div className='btn offset-4'>
                <div>
                  <button type="submit" className="primary">Uplode Now</button>
                </div>
                <div>
                  <button type="reset" className="secondary">Reset </button>
                </div>
              </div>
            </div>
          </form>




        </div>

      </div>
    </div>
  )
}

export default Uplodedocument