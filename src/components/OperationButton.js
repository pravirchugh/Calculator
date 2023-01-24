import React from 'react'
import './OperationButton.css'

function OperationButton(props){
    return (
        <>
            <div className="operationBtn">

                <p style={{textAlign: "center", lineHeight: "5.5vh"}}>{props.val}</p>

            </div>
        </>
    )
}
export default OperationButton;