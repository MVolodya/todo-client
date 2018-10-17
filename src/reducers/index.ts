import { Action } from 'redux';
import { ActionTypes } from 'src/actions';
import { ITodos } from 'src/interfaces/ITodos.interfaces';

interface IAction extends Action {
  payload: any
};

const initState = {
  todos: []
};

const todosReducer = (state: ITodos = initState, action: IAction) => {
  switch(action.type) {
    case ActionTypes.ADD_TODO: {
      const todo = action.payload.todo
      return {
        ...state,
        todos: [...state.todos, todo]
      }
    }
    case ActionTypes.DONE_TODO: {
      const id = action.payload
      return {
        ...state,
        todos: 
          state.todos.map(i => i.id === id ? { ...i, done: !i.done } : i)
      }
    }
    case ActionTypes.DELETE_TODO: {
      const id = action.payload 
      return {
        ...state,
          todos: state.todos.filter(todo => todo.id !== id)
      }
    }
    default: return state;
  }
};

export default todosReducer;