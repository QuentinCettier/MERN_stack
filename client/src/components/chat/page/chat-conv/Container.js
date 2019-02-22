import React, { Component } from 'react';
import './Container.css';


import Conv from "./conv/Container";
import SendLabel from "./label/Container";


class ChatConv extends Component {
    render(){
        return (
            <div className="Chatcontainer">
                <Conv />
                <SendLabel />
            </div>
        )
    }
}

export default ChatConv;