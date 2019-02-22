import React, { Component } from 'react';
import './Container.css';
import io from 'socket.io-client';


import Conv from "./conv/Container";
import SendLabel from "./label/Container";
import sendImage from "./../../../../images/Polygon.png";
import ReceivedMessage from "./../chat-conv/conv/received/Container";
import SendMessage from "./../chat-conv/conv/send/Container";


class ChatConv extends Component {


    constructor(props) {

        super(props)
    
        this.conv = null

        this.state = {
          response: '',
          username: '',
          password: '',
          to: window.location.pathname.split('/')[3],
          responseToPost: '',
          auth: false,
          message: '',
          messages: [],
          private_message: '',
          private_messages: [],
        };
    
        this.callApi()
        
    
        this.socket = io('http://localhost:3002')
    
        
        
        //Public chat
        this.socket.on('receive_message', function(data){
          addMessage(data);
        });
    
        const addMessage = data => {
          this.setState({ messages: [...this.state.messages, data]})
        }
    
        this.sendMessage = e => {
          e.preventDefault()
          this.socket.emit('send_message', {
            author: this.state.username,
            message: this.state.message
          })
          this.setState({message: ''})
        }
    
        //Private chat
        this.socket.on('receive_private_message', function(data){
          addPrivateMessage(data);
        });
        
    
        const addPrivateMessage = data => {
          this.setState({ private_messages: [...this.state.private_messages, data]})
          
        }
    
        this.sendPrivateMessage = e => {
          e.preventDefault()
          this.socket.emit('send_private_message', {
            to: window.location.pathname.split('/')[3],
            author: this.state.username,
            private_message: this.state.private_message
          })
        }
        
    
        
    
      }
    
      componentDidMount = () => {
        // this.clearChat()
      }
      
    clearChat = () => {
        this.conv.remove()
    }

    callApi = async () => {
        const response = await fetch('/api/user/about', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            
        })
        .then(response => response.json())
        .then(res => {
        
        this.setState({
            username: res.data.user.username,
            friends: res.data.friends
        })
        })
        .then( () => {
            this.socket.emit('username', window.location.pathname.split('/')[3])
        })  
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: this.state.username,
                password: this.state.password
            }),
        })
        .then(response => response.json())
        .then(data => {
            this.setState({auth : data.data.registered})
        })
        if(this.state.auth) {
            this.props.history.replace('/login');
        }
    
    };
    render(){
        return (
            <div className="Chatcontainer">
                
                <div className="Conv" >
                    <div className="msg-container" ref={ div => this.conv = div }>
                    {
                        this.state.private_messages.map((message, key) => {
                            console.log(message)
                            if(message.author === this.state.username) {
                                return (
                                    <SendMessage key={key} text={message.private_message}/>
                                )
                            } else {
                                return (
                                    <ReceivedMessage key={key} text={message.private_message}/>
                                )
                            }
                            
                        }
                    )}
                    </div>
                </div>
                <div className="sendLabel">
                    <input type="text" placeholder="Ecrivez votre message ici ..." value={this.state.private_message} onChange={ev => this.setState({private_message: ev.target.value})}></input>
                    <button onClick={this.sendPrivateMessage}><img src={sendImage}/></button>
                </div>
            </div>
        )
    }
}

export default ChatConv;