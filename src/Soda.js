import React from 'react' 
import { Link } from 'react-router-dom' 
import './Soda.css'

const Soda = () => {
    return (
        <div className="Soda">
            <h1>Soda Selection</h1>
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1625584566265-2b3761dcc5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                    alt="Can of Coke"
                /> 
            </div>
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                    alt="Can of Fanta"
                /> 
            </div>
            <p><Link to="/">Go Back</Link></p>

        </div>
    )
}

export default Soda 