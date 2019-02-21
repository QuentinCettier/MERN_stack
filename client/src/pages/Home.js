import React, { Component } from 'react'
import logo from './../logo.svg'
import io from 'socket.io-client';

class Home extends Component {
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
    this.socket = io('http://localhost:3002')

    this.socket.emit('username', "quentin")
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
        author: this.state.username,
        private_message: this.state.private_message
      })
    }
    

    

  }
    

    componentWillMount = () => {
      
  
      
    }
    
    // componentDidMount() {

    //   this.callApi()
    // }

    // callApi = async () => {
    //     const response = await fetch('/api/verifyToken', {
    //       method: 'POST',
    //       headers: {
    //       'Content-Type': 'application/json',
    //       },
    //     })
    //     // const body = await response.json();
    //     // if (response.status !== 200) throw Error(body.message);
    //     // return body;
    // };

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
        {/* <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Register</strong>
          </p>
          <input
            className="username__input"
            type="text"
            name="username"
            value={this.state.post}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            className="password__input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p> */}

        <div className="public_messages">
          <h2>public chat</h2>
            {
              this.state.messages.map((message, key) => {
                return (
                    <div key={key}>{message.author}: {message.message}</div>
                )
              }
            )}
        </div>

        <div className="footer">
            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
            <br/>
            <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
            <br/>
            <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
        </div>

        <div className="private_messages">
          <h2>private chat with {}</h2>
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

export default Home;

