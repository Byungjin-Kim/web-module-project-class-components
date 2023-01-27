import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return (<Todo key={todo.id} handleToggled={this.props.handleToggled} todo={todo} />)
          })
        }

        {/* <li>Make Breakfast</li>
          <li>Go to the library to return books</li>
          <li>Go to Costco to purchase many things</li>
          <li>Practice React!</li>
          <li>Workout!</li> 

          //Make pre-example first!*/}

      </ul>
    )

  }
}
