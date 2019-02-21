import React, { Component } from 'react'

class Home extends Component {

  state = {
    user : null
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
          this.setState({user: res.data.username})
        })
        
        
    };

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
      </div>

    )
  }
}

export default Home;

