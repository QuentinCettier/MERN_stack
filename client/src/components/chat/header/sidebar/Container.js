import React, { Component } from 'react';
import './Container.css';

import AddFriend from './add-friend/Container';
import Logo from './logo/Container';
import AddConv from './new-msg/Container'

class Sidebar extends Component {
    render(){
        return (
            <div className="sidebar-header">
                <AddFriend></AddFriend>
                <Logo></Logo>
                <AddConv></AddConv>
            </div>
        )
    }
}

export default Sidebar;