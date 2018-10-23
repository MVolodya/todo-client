export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  DONE_TODO = 'DONE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  ADD_COLLECTION = 'ADD_COLLECTION',
  DELETE_COLLECTION = 'DELETE_COLLECTION'
};

let nextId = 0;

export const addTodo = (collectionId: number, text: string) => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    collectionId,
    todo: {
      id: nextId++,
      text,
      done: false
    }
  }
});

export const doneTodo = (collectionId: number, todoId: number) => ({
  type: ActionTypes.DONE_TODO,
  payload: {
    collectionId,
    todoId
  }
});

export const deleteTodo = (collectionId: number, todoId: number) => ({
  type: ActionTypes.DELETE_TODO,
  payload: {
    collectionId,
    todoId
  }
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

// const state = {
//   collections: [
//     collection: {
//       id: nextId++,
//       name,
//       todos: [{
//         todo: {
//           id: nextId++,
//           text: 'test text',
//           done: false
//         }
//       }]
//     }
//   ]
// }