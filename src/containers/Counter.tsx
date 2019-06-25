import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { ICounterStore } from '../mobxStore/CounterStore';
import { observer } from 'mobx-react';
import TodoStore from '../mobxStore/TodoStore';
import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs';
import { toStream } from '../mobxStore/mobx-utils';

interface CounterProps {
  counterStore: ICounterStore;
  todoStore: typeof TodoStore;
}

@inject('counterStore', 'todoStore')
@observer
class Counter extends Component<CounterProps, any> {
  render() {
    const { counterStore } = this.props;

    return (
      <div>
        <h1>Counter: {counterStore.counter}</h1>
        <div>
          <button onClick={e => counterStore.increase()}>+</button>
          <button onClick={e => counterStore.decrease()}>-</button>
        </div>
        <h1>NumberList</h1>
        <p>{JSON.stringify(counterStore.numberList, null, 2)}</p>
        <button onClick={e => counterStore.pushNumber(1)}>push</button>
        <button onClick={e => counterStore.popNumber()}>pop</button>
      </div>
    );
  }

  componentDidMount(): void {
    const { todoStore } = this.props;

    TodoStore.fetchTodos();

    toStream(() => todoStore.todos)
      .pipe(debounce(() => timer(3000)))
      .subscribe(value => {
        console.log(value);
      });
  }
}

export default Counter;
