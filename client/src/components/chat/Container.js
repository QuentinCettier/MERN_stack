import React, { Component } from 'react';

import Header from './header/Container';
import PageChat from './page/Container';

class ChatContainer extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
         
        }
    }

  render() {
    const {title} = this.props
    return (

      <div className="App">
            <Header></Header>
            <PageChat user={this.props.user} friends={this.props.friends}></PageChat>
      </div>

    )
  }
}

export default ChatContainer;