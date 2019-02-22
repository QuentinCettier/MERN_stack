import React, { Component } from 'react';
import './Container.css'

class ReceivedMessage extends Component {
render(){

    return(
        <div className="receivedContainer">
        <div className="receivedMessage">{this.props.text}</div>
        </div>
    )

    }

}

export default ReceivedMessage;