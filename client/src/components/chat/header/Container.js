import React, { Component } from 'react';
import './Container.css';

import Sidebar from './sidebar/Container';
import ChatNameBar from './chat-name/Container';

class Header extends Component {
    render(){
        return (
            <div className="Header">
                <Sidebar></Sidebar>
                <ChatNameBar user={this.props.user} to={this.props.to}></ChatNameBar>
            </div>
        )
    }
}

export default Header;