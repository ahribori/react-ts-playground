/**
 * ActionTypes
 */
enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
}

/**
 * Action type definitions
 */
export type TodoActions = {
  [ActionTypes.ADD_TODO]: {
    type: ActionTypes.ADD_TODO;
    content: string;
  };
};

export interface TodoState {
  list: string[];
}

const initialState: TodoState = {
  list: [],
};

export const addTodo = (content: string): TodoActions[ActionTypes.ADD_TODO] => {
  return {
    type: ActionTypes.ADD_TODO,
    content,
  };
};

const todo = (
  state: TodoState = initialState,
  action: TodoActions[keyof TodoActions],
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return state;
    default:
      return state
  }
};

export default todo;
