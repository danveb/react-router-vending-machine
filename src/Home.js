import React from 'react' 
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <h3>Welcome to React Vending Machine.</h3>
            <h3>Please make your selection!</h3>
            <img 
                src="https://images.unsplash.com/photo-1620829450224-1af377025926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop"
                alt="Vending Machine with coffee, water, soda"
            /> 
        </div>
    )
}

export default Home 