import React from 'react'
import './NumberButton.css'

function NumberButton(props){
    return (
        <>
            <div className="numberBtn">

                <p style={{textAlign: "center", lineHeight: "5.5vh"}}>{props.val}</p>

            </div>
        </>
    )
}
export default NumberButton;