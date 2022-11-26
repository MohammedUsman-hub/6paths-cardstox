import React from 'react'
import "./index.css"




export default function Market(props){
    return(
        <div className='contacts'>
            <div className='contact-card'>
                <img src={props.img}></img>
                <h3>{props.name}</h3>
            </div>

            <div className='info-group'>
                <img src={props.arrow}></img>
            </div>

            <div className='info-group'>
                <p src={props.price}></p>
            </div>
        </div>
    )
}