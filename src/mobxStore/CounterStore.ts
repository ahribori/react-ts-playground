import { action, computed, observable } from 'mobx';

export interface ICounterStore {
  counter: number;
  numberList: number[];
  increase: () => void;
  decrease: () => void;
  pushNumber: (number: number) => void;
  popNumber: () => void;
}

class CounterStore implements ICounterStore {
  @observable counter = 0;
  @observable numberList: number[] = [];

  @action
  increase = () => {
    this.counter++;
  };

  @action
  decrease = () => {
    if (this.counter > 0) {
      this.counter--;
    }
  };

  @action
  pushNumber = (number: number) => {
    this.numberList.push(number);
  };

  @action
  popNumber(): void {
    this.numberList.shift();
  }
}

export default new CounterStore();
