import React from 'react';
import TodoItem from './ToDo';

export default (props) => {  // maps over todo list with component from ToDo.js
  const todos = props.todos.map((todo, i) => 
  <TodoItem todo={todo} key={i} index={i} />);
  return ( // returns unordered list of todos
    <ul>
      { todos } 
    </ul>
  );
};