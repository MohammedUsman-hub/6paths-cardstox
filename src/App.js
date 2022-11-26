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

import Luka from './images/luka.jpg'
import RArrow from './images/redArrow.png'
import greenArrow from './images/greenArrow.png'


export default class App extends Component {
    render() { 
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

                <Market
                    img={Luka}
                    name="Luka Donic 2018 Prizm RC PSA 10"
                    arrow={greenArrow}
                    price="£1000"
                />
                
            </div>
            
        );
    }
}
/*  */