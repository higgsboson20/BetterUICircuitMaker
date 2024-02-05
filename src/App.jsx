/*
To run in moly: npm run molybden dev
To run in react-scripts: npm start
 */

import React from "react";
import {Home} from './Home.jsx'
import {AppCanvas} from './AppCanvas.jsx'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default class App extends React.Component {

    sayHello() {
        const name = document.querySelector("#greet-input").value;
        document.querySelector("#greet-msg").textContent = greet(name);
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            document.querySelector("#greet-btn").click();
        }
    }

    render() {
        return(
        <>
            <Router>
                <Routes>
                    <Route exact path = '/' element = {<Home/>}/>
                    <Route exact path = '/circuits' element = {<AppCanvas/>}/>
                </Routes>
            </Router>
        </>
        );
    }
}