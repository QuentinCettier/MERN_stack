import React, { Component } from 'react';
import './Container.css';

import Bubble from './bubble/Bubble';
import Chat from './chat/Chat';

class Container extends Component {
    render(){
        return (
            <div className="Container">
                <Chat></Chat>
                <Bubble></Bubble>
            </div>
        )
    }
}

export default Container;