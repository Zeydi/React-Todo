import React from 'react';
import Todo from 'Todo';

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      agreed: null
    }
    this.renderTodos=this.renderTodos.bind(this)
  }




  renderTodos() {
    return this.props.todos.map(
      todo =>
        <Todo
          {...todo}
          key={todo.id}
        />);

  }

  render() {
    return (
      <div className='todo-list'>
      {this.renderTodos()}
      </div>
    )
  }
}

module.exports = TodoList;
