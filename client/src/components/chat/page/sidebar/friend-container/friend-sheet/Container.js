import React, { Component } from 'react';
import './Container.css';

import FriendImage from './friend-image/Container';
import FriendInformation from './friend-information/Container';

class FriendSheet extends Component {
    render(){
        return (
            <div className="friend-sheet">
                <FriendImage></FriendImage>
                <FriendInformation friend={this.props.friend}></FriendInformation>
            </div>
        )
    }
}

export default FriendSheet;