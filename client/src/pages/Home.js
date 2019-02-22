import React, { Component } from 'react'
import Header from '../components/home/header/Header';
import Container from '../components/home/page/image-container/Container';
import TextContainer from '../components/home/page/explication-container/TextContainer';

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
  
    render() {
      const {title} = this.props
      return (
  
        <div className="AppOrange">
              <Header></Header>
              <TextContainer></TextContainer>
              <Container></Container>
        </div>
  
      )
    }
}

export default Home;

