import './App.css'
import {AppBanner} from './AppBanner.jsx'
import React from 'react';

export const Home = () => {
        return (
            <div className="container">
                {/*<button id="greet-btn" type="button" onClick={this.sayHello}>Greet </button>*/}
                <div className="row">
                    <img src="/assets/CompanyLogo.svg" className="logo" alt="Company Logo"/>
                </div>
                <h1>Welcome to Spice+</h1>
                <p>Please Select An App From Below</p>
                <div id = "AppContainer" className="appcontainer">
                    <AppBanner content = {{title:"Component",body:"This",link:'/circuits'}}/>
                </div>
                <p id="greet-msg"></p>
            </div>
        )
}
