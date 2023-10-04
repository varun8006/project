import React from 'react'
import Cradit from '../CMmodel/Cradit'

import './Cm.css'

const CmAdmin = () => {
  return (
    <div>
      
      <div>
        <div className='content'>
          <Cradit />
          <div className="card text-center">
            <h5 className="card-header">Wellcome</h5>
            <div className="card-body">
              <h5 className="card-title">Thank You Cradit Manager !</h5>
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

export default CmAdmin