import React, { Component } from 'react'
/*import logo from "../images/logo.jpg"*/


export default class NavBar extends Component {
    render() { 
        return (
           <nav className='navbar'>
                <ul className='nav-links'>
                    <li>Market</li>
                    <li>Your Collection</li>
                    <li>About Us</li>
                </ul>
           </nav>
        );
    }
}
 
