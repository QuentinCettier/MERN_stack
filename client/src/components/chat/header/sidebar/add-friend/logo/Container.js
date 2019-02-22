import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './Container.css';
import image from './../../../../../../images/addFriend.svg'

class AddFriendLogo extends Component {
    render(){
        return (
            <NavLink className="logo-add-friend" to="/friend">
                <img src={image} alt="" className=""/>
            </NavLink>
        )
    }
}

export default AddFriendLogo;