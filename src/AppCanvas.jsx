/**
 * Author: Sam Asbell
 * Date: 12/30/23
 * Purpose: Blank canvas for the circuit design
 * application. No menus. Grid-like background.
 *
 *
 */


import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import "./AppCanvas.css"




// Each gridpoint will be interactable
// -- Highlights when hovering mouse over, when parent prop's placement boolean is turned on
const GridPoint = ({index})=>{
    return(
        <img src = {require("./images/GridPoint.png")} alt={index.index} className={"gridpoint"} style = {{}}/>
    );
}

const Grid = () =>{ // grid point (align manually with the background grid)
    let componentsMatrix = [];
    for(let j = 0; j <= 110; j++) {
        let componentsArray = [];
        for (let i = 0; i <= 68; i++) {
            componentsArray.push(<GridPoint key = {[i,j]} index = {{index: [i,j]}}/>);
        }
        componentsMatrix.push(componentsArray);
    }
    return (
        <div>
            {componentsMatrix}
        </div>
    );
}


export const AppCanvas = () => {
   const [components,setComponents] = useState([]);
   const [placementTime,setPlacement] = useState(false);
   return(
       <div className={"canvas"}>
            <Grid/>
       </div>
   );
}