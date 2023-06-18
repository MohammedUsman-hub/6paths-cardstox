import React, { Component } from 'react';

const priceDiv={
    position: 'relative',
}

class Price extends Component {

    render() { 
        return (
            <div stlying={priceDiv}>
                <h2 
                data-text="Pricing" id='price-h2'>
                    Pricing
                </h2>

                <h4 id='no-fee'>
                • No Fee, No Subscription
                </h4>

                <h4 id='sign-up'>
                • Just Sign Up And Begin  
                </h4>


                <button id='price-button'>Sign Up</button>
            </div>
        );
    }
}
 
export default Price;