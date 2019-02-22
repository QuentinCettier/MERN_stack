import React, { Component } from 'react';


import ChatContainer from '../components/chat/Container';

class Chat extends Component {
  
    
    constructor(props) {
        super(props)

        this.state = {
          user : null,
          friend: '',
          friends: [],
        }
    }
    componentWillMount() {
      
      this.callApi()
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
          user: res.data.user.username,
          friends: res.data.friends
        })
        console.log(this.state.friends)
        console.log('---')
        console.log(this.state.user)
      })  
  };

  render() {
    const {title} = this.props
    return (

      <div className="App">
            <ChatContainer user={this.state.user} friends={this.state.friends}></ChatContainer>
      </div>

    )
  }
}

export default Chat;