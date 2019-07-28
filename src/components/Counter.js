import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component{

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  state = {
    current: this.props.min
  }

  increase = () => {
    this.set(this.state.current + 1);
  }

  decrease = () => {
    this.set(this.state.current - 1);
  }

  set = (newCurrent) => {
    let current = Math.min(Math.max(newCurrent, this.props.min), this.props.max);
    this.setState({current});
  }

  handleChange = (newStr) => {
    let cnt = parseInt(newStr);
    this.set(isNaN(cnt) ? this.props.min : cnt);
  }

  render(){
    return(
      <div>
        <button onClick={this.decrease}>-</button>
        <input type="text" value={this.state.current} onChange={(e) => {this.handleChange(e.target.value)}}/>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default Counter;