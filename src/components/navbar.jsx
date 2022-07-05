import React, { Component } from 'react'
import logo from "../images/logo.jpg"


export default class NavBar extends Component {
    render() { 
        return (
           <div>
           
            <button className='button-1'>Start</button>
            <ul className='nav-links'>
                <li>Market</li>
                <li>Your Collection</li>
                <li>About Us</li>
            </ul>
           </div>
        );
    }
}
 
