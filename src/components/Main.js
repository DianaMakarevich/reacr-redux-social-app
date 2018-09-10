import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Main extends Component {
  render() {
    return (
      <Container text>
        <h2 className="title">Сlick to see all users! </h2>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    )
  }
}

export default Main;