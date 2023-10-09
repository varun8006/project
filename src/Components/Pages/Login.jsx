import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

function Login() {

  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  const navigate = useNavigate();

  const islogin = () => {
    if (name === "re" && pwd === "re") {
      alert("Login Successful")
      navigate("/readmin")
    }
    else if (name === "oe" && pwd === "oe") {
      alert("Login Successful")
      navigate("/oeadmin")
    }
    else if (name === "cm" && pwd === "cm") {
      alert(<div className="alert alert-success" role="alert">
        login successfully to admin pannal
      </div>)
      navigate("/cmadmin")
    }
    else if (name === "" && pwd === "") {

      alert("login information is wrong")
      navigate("")

    }
  }

  return (
    <div>
      <Navbar />

      <div className="card col-6 offset-3">
        <h5 className="card-header text-center">Admin Login</h5>
        <div className="card-body">

          <form id="login-form" action="" method="post" >

            <div className='mt-3 mb-3'>
              <label  htmlFor='nm'>Username</label>
              <input type='text' id='nm' name='name' className='form-control'value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className='mt-3 mb-3'>
            <label htmlFor='pass'>Password</label>
            <input type='password' id='pass' name='pwd' className='form-control'
              value={pwd} onChange={e => setPwd(e.target.value)} />
 </div>

            <button type='signup' value='SIGNUP' onClick={islogin} className="primary offset-4">Login</button>

          </form>

        </div>

      </div>

    </div>

  )
}

export default Login


