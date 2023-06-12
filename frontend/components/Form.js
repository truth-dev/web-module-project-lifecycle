import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: ""
    }
  }
  render(){
    return (
      <form>
        <input 
        placeholder='Add Task'
        type='text'
        name='todo'

        />
        <button>Add a Task!</button>

      </form>
    )
  }
} 
