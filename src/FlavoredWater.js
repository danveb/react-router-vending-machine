import React from 'react' 
import { Link } from 'react-router-dom'
import './FlavoredWater.css'

const FlavoredWater = () => {
    return (
        <div className="FlavoredWater">
            <h1>Flavored Water Selection</h1>
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1502396278361-f6ef9aeac89c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                    alt="Can of LaCroix"
                /> 
            </div>
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1611690954721-e6e703792025?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                    alt="Bottle of Perrier"
                /> 
            </div>
            <p><Link to="/">Go Back</Link></p>

        </div>
    )
}

export default FlavoredWater 

