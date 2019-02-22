import React, { Component } from 'react';
import './Container.css';

import GroupeMenuSidebar from './groupe/Container';
import PrivateMenuSidebar from './private/Container';

class MenuPageSidebar extends Component {
    render(){
        return (
            <div className="menu-sidebar-page">
                <GroupeMenuSidebar></GroupeMenuSidebar>
                <PrivateMenuSidebar></PrivateMenuSidebar>
            </div>
        )
    }
}

export default MenuPageSidebar;