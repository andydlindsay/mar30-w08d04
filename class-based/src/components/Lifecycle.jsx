import React, { Component } from 'react';

const Lifecycle = class extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      interval: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  componentDidMount() {
    console.log('component has mounted');

    const interval = setInterval(() => {
      console.log('interval fired');
    }, 1000);

    this.setState({ interval });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prev state', prevState);
    // console.log('current state:', this.state);
    console.log('component has updated');
    
    if (prevProps.userId !== this.props.userId) {
      this.setState({ userId: this.props.userId });
    }
    this.setState()
  }

  componentWillUnmount() {
    console.log('component will unmount');

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

export default Lifecycle;
