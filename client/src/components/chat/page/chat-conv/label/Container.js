import React, { Component } from 'react';
import './Container.css';

import sendImage from "./../../../../../images/Polygon.png";

class SendLabel extends Component {
    render(){
        return (
            <div className="sendLabel">
                <input type="text" placeholder="Ecrivez votre message ici ..."></input>
                <button type="submit"><img src={sendImage}/></button>
                
            </div>
        )
    }
}

export default SendLabel;