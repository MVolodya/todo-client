export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  DONE_TODO = 'DONE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  ADD_COLLECTION = 'ADD_COLLECTION',
  DELETE_COLLECTION = 'DELETE_COLLECTION'
};

let nextId = 0;

export const addTodo = (text: string) => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    todo: {
      id: nextId++,
      text,
      done: false
    }
  }
});

export const doneTodo = (id: number) => ({
  type: ActionTypes.DONE_TODO,
  payload: id
});

export const deleteTodo = (id: number) => ({
  type: ActionTypes.DELETE_TODO,
  payload: id
});

export const addCollection = (name: string) => ({
  type: ActionTypes.ADD_COLLECTION,
  payload: {
    collection: {
      id: nextId++,
      name,
      todos: []
    }
  }
});


// const Collections = {
//   coollections: [
//     {
//       id
//       name
//       todos: [
//         {}
//       ]
//     }
//   ]
// }