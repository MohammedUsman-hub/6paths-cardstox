import React, { Component } from 'react';
import backgroundImg1 from "../images/stock-wallpaper-2.jpg"
import "../index.css"


const bgStyling ={
    opacity: '40%',
    width: '100%',
    height: "52pc",
    display: "block",
    padding: "0px, 0px, 0px, 0px",
    margin: "0px, 0px, 0px, 0px",
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
 
