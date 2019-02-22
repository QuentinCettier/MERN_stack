import React, { Component } from 'react';
import './Container.css';

import AddFriendLogo from './logo/Container'

class AddFriend extends Component {
    render(){
        return (
            <div className="add-friend">
                <AddFriendLogo></AddFriendLogo>
            </div>
        )
    }
}

export default AddFriend;