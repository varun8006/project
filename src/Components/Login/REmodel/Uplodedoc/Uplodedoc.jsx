import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import Regional from '../Regional'




const Uplodedoc = () => {


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
            <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>
            </div>
          </form>
        

        

        </div>

      </div>
    </div>













    
  </>
   

  )
}

export default Uplodedoc