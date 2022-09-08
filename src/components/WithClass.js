import "./WithClass.css"
import React from 'react';

class WithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
        <h1>Realtime CLOCK</h1>
        <hr />
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default WithClass;
