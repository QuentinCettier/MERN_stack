import React, { Component } from 'react';
import './Container.css'

class SendMessage extends Component {
render(){

    return(
        <div className="sendContainer">
        <div className="sendMessage">{this.props.text}</div>
        </div>
    )

    }

}

export default SendMessage;