import { Action } from 'redux';
import ActionTypes from 'src/actions';

interface IAction extends Action {
  payload: any
};

const initState = {
  todos: [
    {
      id: 0,
      text: 'Cool 1',
      done: false,
    },
    {
      id: 1,
      text: 'Cool 2',
      done: false,
    }
  ]
};

let nextId = 0;

const todosReducer = (state = initState, action: IAction) => {
  switch(action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: nextId++, // TODO: create id generator
          text: action.payload
        }]
      }
    case ActionTypes.DONE_TODO:
      const id = action.payload
      return {
        ...state, 
        todos: 
          state.todos.map(i => i.id === id ? { ...i, done: !i.done } : i)
      }
    default: 
      return state;
  }
};

export default todosReducer;