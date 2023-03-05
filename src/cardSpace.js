import React from "react"
import "./index.css"

export default function CardSpace(props){
    return(
        <div className="contacts">

            <div className='contact-card'>
                <img src={`./images/${props.item.img}`}></img>

                <div className="info-group">
                    <img className="arrow" src={`./images/${props.item.arrow}`}></img>
                    <span className="info-group-title">{props.item.cardName}</span>
                    <span className="info-group-price">{props.item.price}</span>
                </div>
            </div>
        </div>
    )
}