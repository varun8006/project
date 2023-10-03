import React from 'react'
import Operational from '../OEmodel/Operational'

import './Oe.css'

const Admin = () => {
  return (
    <div>
      
      <div>
        <div className='content'>
          <Operational />
          <div class="card text-center">
            <h5 class="card-header">Wellcome</h5>
            <div class="card-body">
              <h5 class="card-title">Thank You Operational Executive !</h5>
              <p class="card-text">Your Login has been successfully Done. We will Fetch your data very soon!
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