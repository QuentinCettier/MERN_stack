import React, { Component } from 'react';
import './Container.css';


class ChatName extends Component {
    render(){
        return (
            <div className="chat-name">
               <div className="name">Armel Cantin</div>
               <div className="state">Disponible</div>
            </div>
        )
    }
}

export default ChatName;