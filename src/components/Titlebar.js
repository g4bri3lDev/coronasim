import React from 'react'
import './titlebar.css'
export default function Titlebar(props) {
    return (
        <div className="navbar">
           <a href="/">Corona Simulator</a>
            {/*<button onClick={() => props.reset}>Reset</button>*/}
            <button onClick={props.toggle}>Toggle Running</button>
        </div>
    )
}