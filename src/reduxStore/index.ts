import { Action, combineReducers, createStore, Reducer } from 'redux';
import todo, { TodoActions, TodoState } from './todo';

export type RootAction = TodoActions[keyof TodoActions];

export interface RootState {
  todo: TodoState;
}

const appReducer = combineReducers({
  todo,
});

const rootReducer = (state: RootState, action: Action) => {
  return appReducer(state, action);
};

export function initializeStore(initialState: RootState) {
  return createStore(
    rootReducer as Reducer<RootState, RootAction>,
    initialState,
  );
}
