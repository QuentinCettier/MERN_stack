import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Try.css';

import Text from './text/Text'

class Try extends Component {
    render(){
        return (
            <NavLink className="Try" to="/connexion">
                <Text></Text>
            </NavLink>
        )
    }
}

export default Try;