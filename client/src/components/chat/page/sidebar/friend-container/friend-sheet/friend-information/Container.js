import React, { Component } from 'react';
import './Container.css';

import NameList from './name/Container';
import MessageList from './message/Container';

class FriendInformation extends Component {
    render(){
        return (
            <div className="friend-information">
                <NameList name={this.props.friend.username}></NameList>
                <MessageList name="Juste un petit message"></MessageList>
            </div>
        )
    }
}

export default FriendInformation;