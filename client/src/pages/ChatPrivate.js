import React, { Component } from 'react';
import io from 'socket.io-client';

import ChatContainer from '../components/chat/Container';

class ChatPrivate extends Component {
  

  constructor(props) {
    super(props)

    this.state = {
      user : null,
      friend: '',
      friends: [],
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
    
//     constructor(props) {
//         super(props)

//         this.state = {
//           user : null,
//           friend: '',
//           friends: [],
//         }
//     }
//     componentWillMount() {
      
//       this.callApi()
//     }

//     callApi = async () => {
//       const response = await fetch('/api/user/about', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
          
//       })
//       .then(response => response.json())
//       .then(res => {
        
//         this.setState({
//           user: res.data.user.username,
//           friends: res.data.friends
//         })
//         console.log(this.state.friends)
//         console.log('---')
//         console.log(this.state.user)
//       })  
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           username: this.state.username,
//           password: this.state.password
//         }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       this.setState({auth : data.data.registered})
//     })
//     if(this.state.auth) {
//       this.props.history.replace('/login');
//     }

// };
  render() {
    const {title} = this.props
    return (

      <div className="App">
            <ChatContainer user={this.state.user} friends={this.state.friends}></ChatContainer>
      </div>

    )
  }
}

export default ChatPrivate;