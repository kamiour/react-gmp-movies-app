import React from 'react';
import './Counter.scss';

interface CounterState {
  counterValue: number;
}

export default class Counter extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      counterValue: 0,
    };

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount(): void {
    this.setState((prevState: CounterState) => {
      return {
        counterValue: prevState.counterValue + 1,
      };
    });
  }

  decreaseCount(): void {
    this.setState((prevState: CounterState) => {
      const newValue = prevState.counterValue - 1;

      return {
        counterValue: newValue < 0 ? 0 : newValue,
      };
    });
  }

  render() {
    return (
      <>
        <h3>Counter (Class component):</h3>

        <div className="counter">
          <button className="counter-btn" onClick={this.decreaseCount}>-</button>
          <span className="counter-value">{this.state.counterValue}</span>
          <button className="counter-btn" onClick={this.increaseCount}>+</button>
        </div>
      </>
    );
  }
}
