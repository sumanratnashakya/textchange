 import React from 'react';
 import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
 
 export default function Navbar(props) {
   return (
     <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link> {/*calling title from "app.js file navbar"  tag using prop dynamically for future title reuse for other navbar*/}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul> 
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick= {()=>{props.toggleMode('primary')}} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick= {()=>{props.toggleMode('danger')}} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick= {()=>{props.toggleMode('success')}} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick= {()=>{props.toggleMode('warning')}} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
        </div>

        {/* below code: first convert html to js using {} and template litters and use $ to make a variable and used ternary operater to change the color  */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}> 
          <input className="form-check-input" type="checkbox" onClick= {()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode </label>
        </div>
      </div>
    </div>
  </nav>
  </>
   )
 }
 
//  propTypes are used to make sure if the passed data is string or number or object or array or etc
 Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     about: PropTypes.string
 }

 // default proptype = if the data is empty than by default pass this data
 Navbar.defaultProps= {
     title:'Enter Title here',
     about:'Enter About here'
 }