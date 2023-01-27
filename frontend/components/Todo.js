import React from 'react'

export default class Todo extends React.Component {

  handleClick = () => {
    // console.log("handle click!", this.props.todo.id);
    this.props.handleToggled(this.props.todo.id);
  }

  render() {
    return (<li onClick={this.handleClick}>{this.props.todo.name} {this.props.todo.completed ?
      <span className="checkmark">
        <div className="checkmark_stem"></div>
        <div className="checkmark_kick"></div>
      </span>

      : <span></span>}</li>);
  }
}



