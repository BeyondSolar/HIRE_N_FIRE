import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar">

    <span className="batch1">
    <a href="#home">Home</a>
    </span>

    
    <a href="#findtalent">Find Talent</a>
    <div className="dropdown">
        <button className="dropbtn">Services</button>
        <div className="dropdown-content">
            <a href="#service1">IT & Computing</a>
            <a href="#service2">Artificial Intelligence</a>
            <a href="#service3">Machine Learning</a>
        </div>
    </div>
    <div className="dropdown">
        <button className="dropbtn">Find Work</button>
        <div className="dropdown-content">
            <a href="#service1">Meta</a>
            <a href="#service2">Microsoft</a>
            <a href="#service3">Google</a>
        </div>
    </div>
    <a href="#contact">Contact us</a>
    

    <span className="batch2">
    <Link to='/login'>Log in</Link>
    </span>
    <Link to='/signup'>Sign up</Link>
    
    </div>    
  );
}

export default Header;
