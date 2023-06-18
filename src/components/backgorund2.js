import React, { Component } from 'react';
import "../index.css"


const bg2Styling ={
    opacity: '80%',
    width: '100%',
    height: "60pc",
    position: 'relative',
    bottom: '62pc',
    display: "block",
    padding: "0px, 0px, 0px, 0px",
    margin: "0px, 0px, 0px, 0px",
};
const bg2Div={
    position: 'relative',
}

export default class Background2 extends Component {
    
    render() { 
        return (
            <div style={bg2Div}>
                <img style={bg2Styling} src="./images/stock-wallpaper-1.jpg"></img>

                <img  id='curry' src="./images/rpa-1.jpeg"></img>    
                <h3 id='curry-h3'>Vitnage And Modern Cards.</h3>
                <h3 id='curry-h3-1'> Most Common To The Most Rarest.</h3>

                <img id='ruth' src="./images/babe.jpg"></img>
                <h2 id='ruth-h2'>A Market For Both Raw And Graded</h2>
            </div>


        );
    }
}
 
