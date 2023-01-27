import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }



  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit!");
    this.props.handleAdd(this.state.input);



  }
  render() {
    return (
      <form>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>

      </form>
    )
  }
}


