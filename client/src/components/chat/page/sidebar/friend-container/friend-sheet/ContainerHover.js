import React, { Component } from 'react';
import './Container.css';

import FriendImageHover from './friend-image/ContainerHover';
import FriendInformation from './friend-information/Container';

class FriendSheetHover extends Component {
    render(){
        return (
            <div className="friend-sheet-hover">
                <FriendImageHover></FriendImageHover>
                <FriendInformation></FriendInformation>
            </div>
        )
    }
}

export default FriendSheetHover;