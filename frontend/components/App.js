import React from 'react'
import axios from 'axios';
import Form from './Form';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'


const getTasks = () => {
  return axios.get(- ` http://localhost:9000/api/todos`
              .then(res => res)
              .catch( console.error('noooo!!!'))
  )
}



export default class App extends React.Component {



  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'mowing the lawn',
          id: 128,
          completed:false
        }
      ]
      
      
    }
   
    
  }
  
  componentDidMount() {
  console.log('componenet did indeed mount')
  }


  render() {
    const {todos} = this.state;
    return (
      <>
      
      <TodoList  todos={todos} />
      <Form />
      <button>Tasks Done!</button>
      </>
    )
  }
}
