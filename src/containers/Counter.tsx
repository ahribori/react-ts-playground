import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { ICounterStore } from '../mobxStore/CounterStore';

interface CounterProps {
  counterStore: ICounterStore;
}

@inject('counterStore')
class Counter extends Component<CounterProps, any> {
  render() {
    const { counterStore } = this.props;
    return <div>Counter: {counterStore.counter}</div>;
  }
}

export default Counter;
