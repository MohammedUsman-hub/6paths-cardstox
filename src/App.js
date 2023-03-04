import React, { Component } from 'react';
import Jordan from './components/headerImg';
import NavBar from './components/navbar';
import Mickey from './components/mickeyMantle';
import Background1 from './components/background';
import TitleText from './components/titleText';
import Background2 from './components/backgorund2';
import Curry from './components/curry';
import Ruth from './components/babe';
import Price from './components/pricing';
import Market from './market.js'

import data from "./data"





export default function App(){
    const Datajs = data.map(item => {
        return(
            <Market
                key={item.id}
                item={item}
            />
        )
    })
    return (
            <div>
                <Background1/>
                <NavBar/>
                <Jordan/> 
                <Mickey/>
                <TitleText/>
                <Background2/>
                <Curry/>
                <Ruth/>
                <Price/>
                
            </div>
            
        );
}
/*  */