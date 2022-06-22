import React, { Component } from 'react'
import logo from "../images/logo.jpg"


export default class NavBar extends Component {
    render() { 
        return (
           <nav>
            <img src={logo} alt="" />
            <button >Start Buying</button>
            <h6>About Us</h6>
            <h6>Your Collection</h6>
            <h6>Market</h6>
           </nav>
        );
    }
}
 
