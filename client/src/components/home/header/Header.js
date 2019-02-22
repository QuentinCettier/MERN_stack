import React, { Component } from 'react';
import './Header.css';

import Logo from './logo/Neko';
import Menu from './menu/Menu';

class Header extends Component {
    render(){
        return (
            <div className="Header">
                <Logo></Logo> 
                <Menu></Menu>  
            </div>
        )
    }
}

export default Header;