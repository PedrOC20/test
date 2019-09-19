import React, { Component } from 'react';
import './Hello.css'

// const name = 'Pedro';


// const Hello = (props) => {
//   return <h1>Hello {props.name}</h1>;
// }

class Hello extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const classes = `hello-header ${this.state.clicked ? 'clicked' : ''}`;

    return (
      <h1 onClick={this.handleClick} className={classes}>
        Hello {this.props.name}
      </h1>
    );
  }
}

export default Hello;
