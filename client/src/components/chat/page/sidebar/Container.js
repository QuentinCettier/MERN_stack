import React, { Component } from 'react';
import './Container.css';

import MenuPageSidebar from './menu/Container';
import ContentSidebar from './friend-container/Container';

class PageSidebar extends Component {
    render(){
        return (
            <div className="sidebar-page">
                <MenuPageSidebar user={this.props.user} friends={this.props.friends}></MenuPageSidebar>
                <ContentSidebar user={this.props.user} friends={this.props.friends}></ContentSidebar>
            </div>
        )
    }
}

export default PageSidebar;