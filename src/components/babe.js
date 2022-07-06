import React, { Component } from 'react';
import ruth from "../images/babe.jpg"
import "../index.css"

 
export default class Ruth extends Component {

    render() { 
        return (
            <div>
                <img id='ruth' src={ruth}></img>
                <h2 id='ruth-h2'>A Market For Both Raw And Graded</h2>
            </div>
            
        );
    }
}
