import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AddFriend extends Component {

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
        <form onSubmit={this.handleSubmit}>
            <h1>Add Friend</h1>
          <input
            className="username__input"
            type="text"
            name="friend"
            value={this.state.friend}
            onChange={e => this.setState({ friend: e.target.value })}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>

    )
  }
}

export default AddFriend;