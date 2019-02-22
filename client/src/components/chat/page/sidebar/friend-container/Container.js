import React, { Component } from 'react';
import './Container.css';
import FriendSheet from './friend-sheet/Container';
import FriendSheetHover from './friend-sheet/ContainerHover';

class ContentSidebar extends Component {
    constructor(props) {
        super(props)
        
    }
    render(){
        return (
            <div className="sidebar-friends-container">
                {
                    this.props.friends.map((friend, key) => {
                        return (
                            <FriendSheet key={key} friend={friend}></FriendSheet>
                        )
                    })
                }
{/*                 
                <FriendSheet></FriendSheet>
                <FriendSheet></FriendSheet>
                <FriendSheet></FriendSheet>
                <FriendSheet></FriendSheet>
                <FriendSheet></FriendSheet>
                <FriendSheet></FriendSheet>
                <FriendSheet></FriendSheet> */}
            </div>
        )
    }
}

export default ContentSidebar;