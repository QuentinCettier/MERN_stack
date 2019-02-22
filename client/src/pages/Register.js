import React, { Component } from 'react'

class Register extends Component {

    state = {
        response: '',
        username: '',
        password: '',
        responseToPost: '',
        registered: false
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
            console.log(data)
            this.setState({registered: data.data.registered})
            
        })
        .then(() => {
            if(this.state.registered) {
                this.props.history.replace('/login');
            }
        })
        
    };
  render() {
      
    
    return (
        <div className="home-container">
            <h1>register</h1>
            <form onSubmit={this.handleSubmit}>
            <input
                className="username__input"
                type="text"
                name="username"
                placeholder="username"
                value={this.state.post}
                onChange={e => this.setState({ username: e.target.value })}
            />
            <input
                className="password__input"
                type="password"
                name="password"
                placeholder="mot de passe"
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

export default Register;

