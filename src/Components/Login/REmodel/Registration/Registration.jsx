import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import Regional from '../Regional'

const Registration = () => {
 function savedata(data) {
  console.log(data);

  axios.post("http://localhost:8080/registration", data);
  alert("data submit");

}
const { register, handleSubmit } = useForm();
 return (

  <>
   <div className='content'>
    <Regional />
    <div className="card">
     <h5 className="card-header text-center">Registration Form</h5>
     <div className="card-body">
      <form onSubmit={handleSubmit(savedata)}>
       <div>
        <div className="container">
         <div className='row'>
          <label className="form-label fs-4">Basic Information:-</label>
          <div className='col'>
           <label htmlFor="firstname" className="form-label mt-2 mt-2">First Name</label>
           <input type="text" name='firstname' className="form-control" id="firstname" {...register("firstname")}/>
          </div>
          <div className='col'>
           <label htmlFor="middlename" className="form-label mt-2 mt-2">Middle Name</label>
           <input type="text" name='middlename' className="form-control" id="middlename" {...register("middlename")}/>
          </div>

          <div className='col'>
           <label htmlFor="lastname" className="form-label mt-2 mt-2">Last Name</label>
           <input type="text" name='lastname' className="form-control" id="lastname" {...register("lastname")}/>
          </div>
         </div>



         <div className='row'>
          <label className="form-label mt-3 mt-2 fs-4">Permanent Address :-</label>
          <div className='col'>
           <label htmlFor="housenumber" className="form-label mt-2 mt-2">House Number</label>
           <input type="text" name='housenumber' className="form-control" id="housenumber" {...register("housenumber")}/>
          </div>
          <div className='col'>
           <label htmlFor="buildingnumbername" className="form-label mt-2 mt-2">Building Number & Name</label>
           <input type="text" name='buildingnumbername' className="form-control" id="buildingnumbername" {...register("buildingnumbername")}/>
          </div>

          <div className='col'>
           <label htmlFor="areaname" className="form-label mt-2 mt-2">Area Name</label>
           <input type="text" name='areaname' className="form-control" id="areaname" {...register("areaname")}/>
          </div>
         </div>

         <div className='row'>
          <div className='col'>
           <label htmlFor="city" className="form-label mt-2 mt-4">City</label>
           <input type="text" name='city' className="form-control" id="city" {...register("city")}/>
          </div>
          <div className='col'>
           <label htmlFor="zippostalcode" className="form-label mt-2 mt-4">Zip / Postal Code</label>
           <input type="text" name='zippostalcode' className="form-control" id="zippostalcode" {...register("zippostalcode")}/>
          </div>

          <div className='col'>
           <label htmlFor="conutry" className="form-label mt-2 mt-4">Country</label>
           <input type="text" name='conutry' className="form-control" id="conutry" {...register("conutry")}/>
          </div>
         </div>



         <div className='row'>
          <label className="form-label mt-4 fs-4">Local Address :-</label>
          <div className='col'>
           <label htmlFor="lhousenumber" className="form-label mt-2 mt-2">House Number</label>
           <input type="text" name='lhousenumber' className="form-control" id="lhousenumber" {...register("lhousenumber")}/>
          </div>
          <div className='col'>
           <label htmlFor="lbuildingnumbername" className="form-label mt-2 mt-2">Building Number & Name</label>
           <input type="text" name='lbuildingnumbername' className="form-control" id="lbuildingnumbername" {...register("lbuildingnumbername")}/>
          </div>

          <div className='col'>
           <label htmlFor="lareaname" className="form-label mt-2 mt-2">Area Name</label>
           <input type="text" name='lareaname' className="form-control" id="lareaname" {...register("lareaname")}/>
          </div>
         </div>

         <div className='row'>
          <div className='col'>
           <label htmlFor="lcity" className="form-label mt-2 mt-4">City</label>
           <input type="text" name='lcity' className="form-control" id="lcity" {...register("lcity")}/>
          </div>
          <div className='col'>
           <label htmlFor="lzippostalcode" className="form-label mt-2 mt-4">Zip / Postal Code</label>
           <input type="text" name='lzippostalcode' className="form-control" id="lzippostalcode" {...register("lzippostalcode")}/>
          </div>

          <div className='col'>
           <label htmlFor="lconutry" className="form-label mt-2 mt-4">Country</label>
           <input type="text" name='lconutry' className="form-control" id="lconutry" {...register("lconutry")}/>
          </div>
         </div>


         <div className='row'>
          <label className="form-label mt-5 fs-4">Previous Loan Information :-</label>
          <div className='col'>
           <label htmlFor="loanamount" className="form-label mt-2 mt-2">Loan Amount</label>
           <input type="text" name='loanamount' className="form-control" id="loanamount" {...register("loanamount")}/>
          </div>
          <div className='col'>
           <label htmlFor="tenure" className="form-label mt-2 mt-2">Tenure</label>
           <input type="text" name='tenure' className="form-control" id="tenure" {...register("tenure")}/>
          </div>

          <div className='col'>
           <label htmlFor="paidamount" className="form-label mt-2 mt-2">Paid Amount</label>
           <input type="text" name='paidamount' className="form-control" id="paidamount" {...register("paidamount")}/>
          </div>
         </div>

         <div className='row'>
          <div className='col'>
           <label htmlFor="loanstatus" className="form-label mt-2 mt-4">Loan Status</label>
           <input type="text" name='loanstatus' className="form-control" id="loanstatus" {...register("loanstatus")}/>
          </div>
          <div className='col'>
           <label htmlFor="remark" className="form-label mt-2 mt-4">Remark</label>
           <input type="text" name='remark' className="form-control" id="remark" {...register("remark")}/>
          </div>

          <div className='col'>
           <label htmlFor="pandingloan" className="form-label mt-2 mt-4">Panding Loan</label>
           <input type="text" name='pandingloan' className="form-control" id="pandingloan" {...register("pandingloan")}/>
          </div>
         </div>





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


  </>
 )
}

export default Registration