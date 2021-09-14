import React from 'react' 
import { Link } from 'react-router-dom'
import './Tea.css'

const Tea = () => {
    return (
        <div className="Tea">
            <h1>Tea Selection</h1>
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1516638352197-2a528822bf6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                    alt="Bottle of Mate Tea"
                /> 
            </div>
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1600355850815-3370bd48a820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                    alt="Bottle of Iced Tea"
                /> 
            </div>
            <p><Link to="/">Go Back</Link></p>

        </div>
    )
}

export default Tea 