import React from 'react' 
import { BrowserRouter, Route } from 'react-router-dom' 
import NavBar from './NavBar' 
import './App.css';

// Routes
import Home from './Home'
import Tea from './Tea'
import FlavoredWater from './FlavoredWater'
import Soda from './Soda' 

const App = () => {
  return (
    <div className="App">

      {/* BrowserRouter Component */}
      <BrowserRouter>

        {/* NavBar Component */}
        <NavBar /> 

        {/* Route Components */}
        <Route exact path="/">
          {/* Component to be rendered */}
          <Home /> 
        </Route>

        <Route exact path="/tea">
          <Tea /> 
        </Route>

        <Route exact path="/flavored-water">
          <FlavoredWater /> 
        </Route>

        <Route exact path="/soda">
          <Soda /> 
        </Route>

      </BrowserRouter>

    </div>
  )
}

export default App;