import React, { Component } from 'react';
import './Container.css';

import LogoGroupeSidebar from './logo/Container'

class PrivateMenuSidebar extends Component {
    render(){
        return (
            <div className="private-menu-sidebar">
                <LogoGroupeSidebar></LogoGroupeSidebar>
            </div>
        )
    }
}

export default PrivateMenuSidebar;