import React from 'react'
import Regional from '../REmodel/Regional'

import './Re.css'

const Admin = () => {
  return (
    <div>
      <Regional />
      <div>
        <div className='content'>
          <Regional />
          <div className="card text-center">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Thank You !</h5>
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