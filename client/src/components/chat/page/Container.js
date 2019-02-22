import React, { Component } from 'react';
import './Container.css';

import PageSidebar from './sidebar/Container';
import ChatConv from './chat-conv/Container';

class PageChat extends Component {
    render(){
        return (
            <div className="chat-page">
                <PageSidebar user={this.props.user} friends={this.props.friends}></PageSidebar>
                <ChatConv></ChatConv>
            </div>
        )
    }
}

export default PageChat;