import React, { Component } from 'react';
import backgroundImg1 from "../images/stock-wallpaper-2.jpg"
import "../index.css"

export default class Background1 extends Component {
    
    render() { 
        return (
            <div className='bg'>
                <img src={backgroundImg1}></img>
            </div>
        );
    }
}
 
