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

import cr7 from './images/cr7.png'
import messi from './images/messi.jpeg'



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
                    name="Luka Donic 2018 Prizm - PSA 10"
                    arrow={greenArrow}
                    price="£1000"
                />
                <Market
                    img={cr7}
                    name="Cristiano Ronaldo 2003 Panini Sports - PSA 10"
                    arrow={RArrow}
                    price="£25,000"
                />
                
            </div>
            
        );
    }
}
/*  */