import React from 'react'
import "./index.css"




export default function Market(props){
    return(
       
        <div className='contacts'>
            <div className='contact-card'>
                <img src={props.img}></img>
                <p><b>{props.cardName}</b></p>
            </div>

            <div className='info-group'>
                <img src={props.arrow}></img>
            </div>

            <div className='info-group'>
                <p>{props.price}</p>
            </div>
        </div> 
        
    )
}