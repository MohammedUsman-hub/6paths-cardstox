import React, { Component } from 'react';
import "../index.css"


const bg2Styling ={
    opacity: '80%',
    width: '100%',
    height: "60pc",
    position: 'relative',
    bottom: '1030px',
    display: "block",
    padding: "0px, 0px, 0px, 0px",
    margin: "0px, 0px, 0px, 0px",
};

export default class Background2 extends Component {
    
    render() { 
        return (
            <div>
                <img style={bg2Styling} src="./images/stock-wallpaper-1.jpg"></img>
                
            </div>


        );
    }
}
 
