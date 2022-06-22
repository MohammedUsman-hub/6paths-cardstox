import React, { Component } from 'react';
import HeaderImg from './components/headerImg';
import NavBar from './components/navbar';

export default class App extends Component {
    render() { 
        return (
            <div>
                <HeaderImg/>
                <NavBar/>
            </div>
            
        );
    }
}