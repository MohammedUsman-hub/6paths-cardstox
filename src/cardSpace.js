import React from "react"
import "./index.css"

export default function CardSpace(props){
    return(
        <div className="contacts contact-card">
            <img src={`./images/${props.item.img}`}></img>
            <div className='contact-card'>
                <img src={`./images/${props.item.arrow}`}></img>
                <span>{props.item.cardName}</span>
                <span>{props.item.price}</span>
            </div>
        </div>
    )
}