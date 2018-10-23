import { Action } from 'redux';
import { ActionTypes } from 'src/actions';
import { ICollections } from 'src/interfaces/ICollection.interfaces';

interface IAction extends Action {
  payload: any
};

const initState = {
  collections: []
};

const rootReducer = (state: ICollections = initState, action: IAction) => {
  switch(action.type) {
    case ActionTypes.ADD_TODO: {
      const id = action.payload.collectionId
      const todo = action.payload.todo
      return {
        ...state,
        collections:
          state.collections.map(i => i.id === id ? { ...i, todos: [...i.todos, todo]} : i)
      }
    }

    // TODO: need to resolve problem with DONE_TODO action
    case ActionTypes.DONE_TODO: {
      const collectionId = action.payload.collectionId
      const todoId = action.payload.todoId

      return {
        ...state,
        collections:
          state.collections.map(
            i => i.id === collectionId
            ? { ...i, todos: i.todos.map(
              t => t.id === todoId
              ? { ...t, done: !t.done }
              : t)}
            : i)
      }
    }
    case ActionTypes.DELETE_TODO: {
      const collectionId = action.payload.collectionId
      const todoId = action.payload.todoId
      return {
        ...state,
        collections:
          state.collections.map(
            i => i.id === collectionId
            ? { ...i, todos: i.todos.filter(
              t => t.id !== todoId
              )}
            : i)
      }
    }
    case ActionTypes.ADD_COLLECTION: {
      const collection = action.payload.collection
      return {
        ...state,
           collections: [...state.collections, collection]
      }
    }
    default: return state;
  }
};

export default rootReducer;