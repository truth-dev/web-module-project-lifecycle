import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'

export default class Form extends React.Component {
 
  
  
 
   

  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
        value={this.props.inputValue}
        onChange={this.props.handleChange}
        placeholder='Add Task'
        type='text'
        name='todo'

        />
        <input 
        type='submit'
        />

      </form>
    )
  }
} 
