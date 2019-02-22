import React, { Component } from 'react';
import './Container.css';

import AddConvLogo from './logo/Container'

class AddConv extends Component {
    render(){
        return (
            <div className="add-conv">
                <AddConvLogo></AddConvLogo>
            </div>
        )
    }
}

export default AddConv;