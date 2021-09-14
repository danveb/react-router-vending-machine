import React from 'react' 
import { NavLink } from 'react-router-dom' 
import './NavBar.css' 

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/tea"> Tea </NavLink>
            <NavLink to="/soda"> Soda </NavLink> 
            <NavLink to="/flavored-water"> Flavored Water </NavLink>
        </nav>
    )
}

export default NavBar 