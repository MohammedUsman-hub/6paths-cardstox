import React, { Component } from 'react';
import jordanRookie from "../images/mj-rookie.jpg"
import "../index.css"

export default class HeaderImg extends Component {
    render() { 
        return (
            <div>
                 <img id='mj-rookie' src={jordanRookie}></img>
            </div>
           
        );
    }
}
 
