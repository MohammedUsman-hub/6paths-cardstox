import React, { Component } from 'react';
import price from "../images/price.png"

class Price extends Component {

    render() { 
        return (
            <div>
                <img id='price' src={price}></img>
            </div>
        );
    }
}
 
export default Price;