import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Container.css';

import AddFriendLogo from './logo/Container'

class AddFriend extends Component {
    render(){
        return (
            <div className="add-friend">
                <NavLink to={`/friend`}>
                    <AddFriendLogo></AddFriendLogo>
                </NavLink>
            </div>
        )
    }
}

export default AddFriend;