import React, { Component } from 'react'
import logo from "../images/logo.jpg"


export default class NavBar extends Component {
    render() { 
        return (
           <nav>
            <img src={logo} alt="" />
            <button >Start</button>
            <h3>6 Paths CardStox</h3>
           </nav>
        );
    }
}
 
