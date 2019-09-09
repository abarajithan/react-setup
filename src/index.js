import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import style from './styles/app.module.scss';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div className={style.red}>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example')
  );

    