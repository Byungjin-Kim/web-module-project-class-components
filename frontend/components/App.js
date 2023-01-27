import React from 'react';

import TodoList from './TodoList';
import Form from './Form';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = (name) => {
    // 1. setState
    // 2. Change todos
    // 3. Make a copy todos
    // 4. Add a new todo to the end

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state, //  loop through all todos
      todos: [...this.state.todos, newTodo]
    });
  }

  handleHide = () => {
    // 1. console.log("Hide Completed Clicked"); check! check! check!
    // 2. setState
    this.setState({
      ...this.state, // 3. loop through all todos
      todos: this.state.todos.filter(todo => { // 5. save filtered todos to state
        return (todo.completed === false); // 4. remove all todos have completed === true / false
      })
    });
  }

  handleToggled = (clickedId) => {
    // 1. setState
    // 2. change todos
    // 3. find todo that we clicked on
    // 4. flip the value of complited for that todo
    // 5. keep all other todos same

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo;
      })
    });
  }

  render() {
    const { todos } = this.state;
    // console.log(todos);

    return (
      <div>
        <h1>To dos:</h1>
        <TodoList handleToggled={this.handleToggled} todos={todos} />

        <Form handleAdd={this.handleAdd} />

        <button onClick={this.handleHide}>Hide Completed</button>

      </div>
    )
  }
}
