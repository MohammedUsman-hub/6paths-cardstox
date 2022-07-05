import React, { Component } from 'react';
import Jordan from './components/headerImg';
import NavBar from './components/navbar';
import Mickey from './components/mickeyMantle';
import Background1 from './components/background';

export default class App extends Component {
    render() { 
        return (
            <div>
                <Background1/>
                <NavBar/>
                <Jordan/> 
                <Mickey/>
            </div>
            
        );
    }
}
/*  */