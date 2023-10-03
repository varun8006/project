import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
 
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/"className="logo">CAR  LOAN</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav justify-content-center me-auto mb-4 mb-lg-0 d-flex ">
              <li className="nav justify-content-center">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav justify-content-center">
                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
              </li>
              <li className="nav justify-content-center">
                <NavLink className="nav-link active" aria-current="page" to="/blogs">Blogs </NavLink>
              </li>
              <li className="nav justify-content-center">
                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>

         

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <NavLink to="/login"><button className="primary" type="button">Login Now</button></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar