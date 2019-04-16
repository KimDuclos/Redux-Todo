import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { newTodo } from './actions';
import TodoList from './components/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
    this.newTodo = this.newTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  newTodo(event) { 
    event.preventDefault();
    this.props.newTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  addTodo(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
      {/* user input form to make list */}
        <form onSubmit={this.newTodo}>
          <input placeholder="New ToDo" onChange={this.addTodo}/>
          <button onClick={this.addTodo} value={this.state.newTodo}>Submit ToDo</button>
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { newTodo })(App);