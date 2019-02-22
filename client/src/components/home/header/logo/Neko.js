import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Neko.css';

class Logo extends Component {
    render(){
        return (
            <NavLink className="Logo" to="/"></NavLink>
        )
    }
}
    






export default Logo;