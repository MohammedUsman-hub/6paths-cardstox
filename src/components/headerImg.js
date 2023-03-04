import React, { Component } from 'react';
import "../index.css"
//import bg1 from "../images/stock-wallpaper-2.jpg"  <img src={bg1} alt="" ></img>

const jordanStyling = {
    width: "10%",
    position: "relative",
    bottom: "51pc",
    left: "39%",
    transform: 'rotate(-25deg)',
}



export default class Jordan extends Component {
    render() { 
        return (
            <div>   
                 <img style={jordanStyling} src="./images/mj-rookie.jpg"alt="" ></img>   
            </div>

            
           
        );
    }
}

