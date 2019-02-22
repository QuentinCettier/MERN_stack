import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

import HeaderLists from './list/MenuLists';

class Menu extends Component {
    render(){
        return (
            <div className="Menu">
                <NavLink className="Lists" to="/inscription">
                    <HeaderLists name="Inscription"></HeaderLists>
                </NavLink>
                <NavLink className="Lists" to="/connexion">
                    <HeaderLists name="Connection"></HeaderLists>
                </NavLink>
            </div>
        )
    }
}
    






export default Menu;