import { action, observable } from 'mobx';
import request from '../lib/axios';

class TodoStore {
  @observable todos = null;

  @action fetchTodos() {
    request
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => (this.todos = response.data));
  }
}

export default new TodoStore();
