import React, { Component } from 'react';


const titleTextStyle={
    position: 'relative'
}


export default class TitleText extends Component {

    render() { 
        return (
            <div style={titleTextStyle}>
                <h2 className='bgH2'>Check Real Time Market For Sports Cards</h2>
                <h3 className='bgH3'>Keep A Log Of Your Personal Collection</h3>
                <button className='button-2'>Sign Up</button>
            </div>
        );
    }
}
 
