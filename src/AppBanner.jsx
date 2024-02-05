/*
Author: Sam Asbell
Date: 1/6/24
Purpose:
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './AppBanner.css'

export const AppBanner = ({content}) => {
    return(
        <a href = {content.link}>
            <button className='appButton'>
                <h className = "title"> {content.title}</h>
                <p className="body"> {content.body} </p>
            </button>
        </a>
    );
}
