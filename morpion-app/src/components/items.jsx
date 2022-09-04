import React from "react";
import '../App.css'
export function Square ({XO , handleClick}){
    return (<div className="square" onClick={ handleClick }>{XO}</div>)

    

}
export default Square
