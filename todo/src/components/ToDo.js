import React, { Component } from 'react';
import { finished } from '../actions';
import { connect } from 'react-redux';

class Todo extends Component {

  finished() {
    this.props.finished(this.props.index);
  }

  render() {  // allows user-created list that can be checked as 'done'
    return (
      <li>
        <input type="checkbox" onChange={this.finished.bind(this)}/>
        {this.props.todo.value}
      </li>
    );
  }
}

export default connect(null, { finished })(Todo);