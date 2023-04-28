import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light navbar-${props.mode} bg-${props.mode} container w-75 sticky-top rounded`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`offcanvas offcanvas-end text-bg-${props.mode} bg-${props.mode}`} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">{props.title}</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} to="/">{props.home}</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} to="/about">{props.about}</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.contact}</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
              <button className="btn btn-primary" type="submit">{props.contact}</button>
            </form> */}

            {/* This is add color palet in your text utils sites */}
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          </div> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => { props.toggleMode(null) }} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.protoType = {
  title: PropTypes.string.isRequired,
  // home: PropTypes.string.isRequired,
  // about: PropTypes.string.isRequired,
  // contact: PropTypes.string.isRequired,
  // services: PropTypes.string.isRequired,
}


// Set your default props
Navbar.defaultProps = {
  // home: 'here home',
  about: 'About',
  contact: 'Contact',
  // services: 'Services'
}
