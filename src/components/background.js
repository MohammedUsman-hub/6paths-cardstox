import React, { Component } from 'react';

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
                <img style={bgStyling} src="./images/stock-wallpaper-2.jpg"></img>

               
            </div>


        );
    }
}
 
