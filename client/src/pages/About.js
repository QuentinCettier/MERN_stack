import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {

  state = {
    user : null,
    friend: '',
    friends: [],
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
          console.log(this.state.user)
        })  
    };

    handleSubmit = async () => {
      const response = await fetch('/api/user/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              friend: this.state.friend,
              user: this.state.user
          })
      })
    }

  render() {
    return (
      <div className="App">
        <h1>Stack MERN</h1>
        <h2>Bonjour {this.state.user}</h2>


        
        <form onSubmit={this.handleSubmit}>
          <h3>Add Friend +  +</h3>
          <input
            className="username__input"
            type="text"
            name="friend"
            value={this.state.friend}
            onChange={e => this.setState({ friend: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>


        <h1>Display Friends</h1>
        {
          this.state.friends.map((friend, key) => {
            return (
                <NavLink key={key} to={`/message/private/${friend.username}`}>{friend.username}</NavLink>
            )
          }
        )}

      </div>

    )
  }
}

export default Home;

