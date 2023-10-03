import React from 'react'
import Operational from './Operational'
import './Oe.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const Cibile = () => {
  function savedata(data) {
    console.log(data);

    axios.post("http://localhost:8080/cibile", data);
    alert(" cibile data submit on RE model");

  }
  const { register, handleSubmit } = useForm();
  return (
    <div className='content'>
      <div className="card">
        <Operational />
        <h5 className="card-header text-center">Cibil Score</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit(savedata)}>
            <div class="col-12">

              <label for="id" class="col-sm-12 col-form-label">Enquiry Id</label>
              <input type="number" name='id' class="form-control" id="id" {...register("id")}/>

              <label for="cibilescore" class="col-sm-12 col-form-label">Cibile Score</label>
              <input type="number" name='cibilescore' class="form-control" id="cibilescore" {...register("cibilescore")}/>

              
              <label for="cibilescoredate" class="col-sm-12 col-form-label">Cibile Score date</label>
              <input type="text" name='cibilescoredate' class="form-control" id="cibilescoredate" {...register("cibilescoredate")} />

              <label htmlFor="status" class="col-sm-12 form-label" >Status</label>
              <select id="status" className="form-select"{...register("status")} >

                <option selected value="">Open this select menu</option>
                <option value="-1">-1</option>
                <option value="negative">Negative</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>

              </select>


              <label for="remark" class="col-sm-12 col-form-label">Remark</label>
              <textarea class="form-control" id="remark" name='remark'rows="4"{...register("remark")} ></textarea>

              <button type="submit" class="primary offset-3">Submit</button>
              <button type="reset" class="secondary mt-4  mb-2 offset-2">Reset</button>

            </div>
          </form>


        </div>
      </div></div>
  )
}

export default Cibile