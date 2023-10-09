import React from 'react'
import Operational from '../OEmodel/Operational'

import './Oe.css'

const Admin = () => {
  return (
    <div>
      
      <div>
        <div className='content'>
          <Operational />
          <div className="card text-center">
            <h5 className="card-header">Wellcome Operational Executive</h5>
            <div className="card-body">
              <h5 className="card-title">Thank You Operational Executive !</h5>
              <p className="card-text">Your Login has been successfully Done. We will Fetch your data very soon!
                <br>
                </br>
                [Car Loan]</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin