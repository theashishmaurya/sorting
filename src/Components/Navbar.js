import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='black'>
      <div className='container'>
        <div class='nav-wrapper'>
          <a class='brand-logo'>Sorting Visualizer</a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/about-me'>About Me</Link>
            </li>
            <li>
              <Link to='/contact-me'>Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
