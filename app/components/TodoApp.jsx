import React from 'react';
import TodoList from 'TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      todos: [
        {
          id: 1,
          text: 'Walk the Dog'
        },{
          id: 2,
          text: 'clean the area'
        },{
          id: 3,
          text: 'play football'
        },{
          id: 4,
          text: 'drink coffee'
        }
      ]
    }
  }
  render() {
    return (
      <div className="columns medium-6 large-6 small-centered">
          <h1 className="text-center page-title">Todos</h1>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}
module.exports = TodoApp;
