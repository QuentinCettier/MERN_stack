import React, { Component } from 'react'

class Home extends Component {

    state = {
        response: '',
        username: '',
        password: '',
        auth: false,
        responseToPost: ''
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/auth/login', {
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
            this.setState({auth: data.data.auth})
            
        })
        .then(() => {
            if(this.state.auth) {
                this.props.history.replace('/user/about');
            }
        })
        
    };
  render() {
      
    
    return (
        <div className="home-container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
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
        <p>{this.state.responseToPost}</p>

      </div>

    )
  }
}

export default Home;

