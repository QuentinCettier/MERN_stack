import React, { Component } from 'react'
import Header from '../components/home/header/Header';
import TextContainer from '../components/inscription/Container';
import Try from './../components/inscription/formulaire/try-button/Try'

// import './Inscription.css'

class Inscription extends Component {
    constructor(props) {
        super(props)

        this.state = {
            response: '',
            username: '',
            password: '',
            responseToPost: '',
            registered: false
        };
    }
    

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
        <div className="AppOrange">
            <Header></Header>
            <div className="Inscription-container">
                <div className="Inscription-title">
                    Inscription
                </div>
                
                <form className="Form-container" onSubmit={this.handleSubmit}>
                    <input
                        className="Pseudo"
                        type="text"
                        name="username"
                        value={this.state.post}
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        className="Mdp-inscription"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit" className="Try"><p className="Try-text">Valider</p></button>
                </form>
            </div>
            {/* <TextContainer></TextContainer> */}
        </div>

        )
    }
}

export default Inscription;