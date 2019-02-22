import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Container.css';

const FriendName = (PassedComponent) => {
    return class extends React.Component {
        render(){
            return (
                <div className="friend-name">
                    <NavLink to={`/message/private/${this.props.name}`}>
                        <PassedComponent {...this.props}/>
                    </NavLink>
                </div>
            )
        }
    }
}

const Name = ({name}) => <div>{name}</div>

const NameList = FriendName(Name);

export default NameList;