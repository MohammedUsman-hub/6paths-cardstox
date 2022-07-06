import React, { Component } from 'react';
import curry from "../images/rpa-1.jpeg"
import "../index.css"

export default class Curry extends Component {

    render() { 
        return (
            <div>
                <img  id='curry' src={curry}></img>    
                <h3 id='curry-h3'>Vitnage And Modern Day Cards.</h3>
                <h3 id='curry-h3-1'> Most Common To The Most Rarest.</h3>
            </div>
            
        );
    }
}
 
