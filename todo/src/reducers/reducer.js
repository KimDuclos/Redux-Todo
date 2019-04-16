import { NEW, FINISHED } from '../actions';
  
  export default (todos = [], action) => {
    switch (action.type) {
      case NEW:
        return todos.concat(action.payload);
      case FINISHED:
        todos[action.payload].complete = !todos[action.payload].complete;
        return todos;
      default:
        return todos;
    }
  };