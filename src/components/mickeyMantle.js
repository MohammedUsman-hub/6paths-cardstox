import React, { Component } from 'react';
import "../index.css"


const mickeyStyling = {
    width: '10%',
    position: 'fixed',
    position: 'relative',
    bottom: '66pc',
    left: '54%',
    transform: 'rotate(25deg)',
}
 

export default class Mickey extends Component {
    
    render() { 
        return (
            <div>
                <img style={mickeyStyling} src="./images/mickey-rookie.jpg"alt=""></img>
            </div>
        );
    }
}
 
