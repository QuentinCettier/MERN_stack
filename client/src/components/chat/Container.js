import React, { Component } from 'react';

import Header from './header/Container';
import PageChat from './page/Container';

class ChatContainer extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
          to: window.location.pathname.split('/')[3],
        }
    }

  render() {
    const {title} = this.props
    return (

      <div className="App">
            <Header user={this.props.user} to={this.state.to}></Header>
            <PageChat user={this.props.user} friends={this.props.friends}></PageChat>
      </div>

    )
  }
}

export default ChatContainer;