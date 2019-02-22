import React, { Component } from 'react';
import './Container.css';

const FriendMessage = (PassedComponent) => {
    return class extends React.Component {
        render(){
            return (
                <div className="friend-message">
                    <PassedComponent {...this.props}/>
                </div>
            )
        }
    }
}

const Name = ({name}) => <div>{name}</div>

const MessageList = FriendMessage(Name);

export default MessageList;