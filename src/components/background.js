import React, { Component } from 'react';
import backgroundImg1 from "../images/stock-wallpaper-2.jpg"
import "../index.css"


const bgStyling ={
    opacity: '50%',
    width: '100%',
    height: "50pc",
   
};

export default class Background1 extends Component {
    
    render() { 
        return (
            <div>
                <img style={bgStyling} src={backgroundImg1}></img>
            </div>


        );
    }
}
 
