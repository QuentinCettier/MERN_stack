import React, { Component } from 'react'
import logo from './../logo.svg'
import io from 'socket.io-client';

class PrivateMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      response: '',
      username: '',
      password: '',
      to: '',
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

  render() {
    
    return (
      <div className="home-container">
       
        <div className="private_messages">
          <h2>private chat with {window.location.pathname.split('/')[3]}</h2>
            {
              this.state.private_messages.map((message, key) => {
                return (
                    <div key={key}>{message.author}: {message.private_message}</div>
                )
              }
            )}
        </div>

        <div className="footer">
            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
            <br/>
            <input type="text" placeholder="Message" className="form-control" value={this.state.private_message} onChange={ev => this.setState({private_message: ev.target.value})}/>
            <br/>
            <button onClick={this.sendPrivateMessage} className="btn btn-primary form-control">Send</button>
        </div>
      </div>


    )
  }
}

export default PrivateMessage;

