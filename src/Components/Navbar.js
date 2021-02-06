import React from 'react'

const Navbar = ( ) =>{
    return (
        <nav className = "black">
        <div className="container">
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">About Me</a></li>
                <li><a href="collapsible.html">Contact Me</a></li>
            </ul>
            </div>
            </div>
        </nav>
        
    )
}
export default Navbar ;
