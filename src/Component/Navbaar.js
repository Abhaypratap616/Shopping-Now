import React from 'react'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import '../Cssparts/Navbaar.css'
import logo from '../data/logo_big.png'

function Navbaar() {
    
  return (
    <div>
      <div className="%">
      
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid navbaar-color">
    <Link className="navbar-brand mx-3" to="home"><img className='logo' src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto color">
        
        <Link className="nav-link text-dark words-dark " to="home"> <p>Home</p></Link>
        <Link className="nav-link text-dark words-dark" to="men"><p>Men</p></Link>
        <Link className="nav-link text-dark words-dark" to="women"><p>Women</p></Link>
        
        <Link className="nav-link text-dark words-dark" to="kids"><p>Kids</p></Link>
        </div>
        <div className='navbar-nav '>
        <Link className="nav-link text-dark words-dark color " to="login"><p>Logout</p></Link>
        <Link className="nav-link  " to="carts"><FaShoppingCart /><span className='my-5'>{1}</span>
</Link>
        </div>
       
       
     
    </div>
  </div>
</nav>
      </div>
    </div>
    </div>
  )
}

export default Navbaar;