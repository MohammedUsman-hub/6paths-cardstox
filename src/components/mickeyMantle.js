import React, { Component } from 'react';
import mickeyRookie from "../images/mickey-rookie.jpg"
import "../index.css"


const mickeyStyling = {
    width: '10%',
    position: 'fixed',
    position: 'relative',
    bottom: '71pc',
    left: '54%',
    transform: 'rotate(25deg)',
    
}



export default class Mickey extends Component {
    
    render() { 
        return (
            <div>
                <img style={mickeyStyling} src={mickeyRookie} alt=""></img>
            </div>
        );
    }
}
 
