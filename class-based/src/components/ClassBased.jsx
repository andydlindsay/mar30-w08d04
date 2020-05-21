import React, { Component } from 'react';

const ClassBased = class extends Component {
  constructor(props) {
    super(props);
    // super();

    this.state = {
      name: 'Alice',
      counter: 0,
      internalMessage: `${props.message} our own message`
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.counter);
    // this is super bad! not fire
    // this.state.counter = this.state.counter + 1;

    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h2>ClassBased!!</h2>
        <p>{this.props.message}</p>
        <h2>Hello {this.state.name}</h2>
        <button
          onClick={this.handleClick}
        >Click Me!</button>
        <p>{this.state.newKey}</p>
        {this.props.children}
      </div>
    );
  }
};

export default ClassBased;

// const newComponent = new ClassBased(props);
// newComponent.props = props;
