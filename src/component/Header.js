import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    
    <div className="container pt-3">
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://web.whatsapp.com/">
          NEWS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/register">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a   className="nav-link" href="https://web.whatsapp.com/">
                Profile
                </a>
            </li>
          </ul>
          <div className="d-flex w-100 justify-content-end">
          <Link to="/login">
          <button type="button" id="login_btn" className="btn btn-secondary mx-3">
              Login
            </button>
           </Link>
           
            <Link to="/register">
            <button type="button" id="register_btn" className="btn btn-secondary">
              Register  </button>
                </Link>
           
          
            <button
              type="button"
              id="logout"
              className="btn btn-danger mx-3"
            
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}
