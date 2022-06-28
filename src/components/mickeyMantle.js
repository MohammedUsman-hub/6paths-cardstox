import React, { Component } from 'react';
import mickeyRookie from "../images/mickey-rookie.jpg"
import "../index.css"

export default class Mickey extends Component {
    
    render() { 
        return (
            <div className='mickey-rookie'>
                <img src={mickeyRookie} alt=""></img>
            </div>
        );
    }
}
 
