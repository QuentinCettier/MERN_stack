import React, { Component } from 'react';
import './Container.css';


class ChatName extends Component {

    constructor(props) {
        super(props)

        
    }
    
    
    render(){
        return (
            <div className="chat-name">
               <div className="name">{this.props.to}</div>
               <div className="state">{this.props.dispo}</div>
            </div>
        )
    }
}

export default ChatName;