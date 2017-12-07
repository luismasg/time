import React, { Component } from 'react';
import Box from './Box';
import decrease from '../utilities/helper';

export default class Ticker extends Component {
  state = {
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 3
  };
  tick() {
    this.setState(prevState => decrease(prevState));
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  renderBoxes() {
    return Object.keys(this.state).map(e => (
      <Box unit={e} value={this.state[e]} key={e} />
    ));
  }
  render = () => <div className="container">{this.renderBoxes()}</div>;
}
