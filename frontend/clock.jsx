import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    //const time = new Date();
    this.state = {  //this.state.time.get
      // hours: time.getHours(),
      // minutes: time.getMinutes(),
      // seconds: time.getSeconds()
      time: new Date()
    };

  }

  tick() {

    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {

    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmout(){

    clearInterval(this.intervalId);
  }


  render(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let year = this.state.time.getFullYear();
    let month = this.state.time.getMonth();
    let date = this.state.time.getDate();



    return (
      <div>
        <h1>Clock</h1>
          <span>Time: {hours}:{minutes}:{seconds}</span>
          <br />
          <span>Date: {month}/{date}/{year}</span>
      </div>
    );

  }
}

export default Clock;
