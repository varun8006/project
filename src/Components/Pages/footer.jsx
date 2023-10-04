import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">

          <h2>Car Loan</h2>
        </div>
        <div className="footer-links">

          <ul>
            <li>
              <NavLink to="/"><a>Home</a></NavLink>
            </li>

            <li>
              <NavLink to="/about"><a>About Us</a></NavLink>
            </li>

            <li>
              <NavLink to="/blogs"><a>Blog</a></NavLink>
            </li>

            <li>
              <NavLink to="/contact"><a>Contact</a></NavLink>
            </li>

            <li>
              <NavLink to="/login"><a>login</a></NavLink>
            </li>




          </ul>
        </div>

      </div>
      <div className="footer-bottom">

        <p>&copy; 2023 CarLoan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer