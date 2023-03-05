import React from 'react'
import "./index.css"




export default function Market(props){
    return(
       
        <div className='contacts'>
            <div className='contact-card'>
                <img src={props.img}></img>
                <p className='info-group'><b>{props.cardName}</b></p>
                <img className='info-group' src={props.arrow}></img>
                <p className='info-group'>{props.price}</p>
            </div>
        </div> 
        
    )
}