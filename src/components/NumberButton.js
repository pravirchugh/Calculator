import React from 'react'
import './NumberButton.css'

function NumberButton(props){
    return (
        <>
            <button className="numberBtn">{props.val}</button>
        </>
    )
}
export default NumberButton;