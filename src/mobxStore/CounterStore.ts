import { action, computed, observable } from 'mobx';

export interface ICounterStore {
  counter: number;
}

class CounterStore implements ICounterStore {
  @observable counter = 0;
}

export default new CounterStore();
