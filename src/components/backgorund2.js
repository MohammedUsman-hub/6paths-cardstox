import React, { Component } from 'react';
import backgroundImg1 from "../images/stock-wallpaper-1.jpg"
import "../index.css"


const bg2Styling ={
    opacity: '80%',
    width: '100%',
    height: "50pc",
    position: 'relative',
    bottom: '1000px',
};

export default class Background2 extends Component {
    
    render() { 
        return (
            <div>
                <img style={bg2Styling} src={backgroundImg1}></img>

               
            </div>


        );
    }
}
 
