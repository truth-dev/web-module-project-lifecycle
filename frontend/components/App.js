import React from 'react'
import axios from 'axios';
import Form from './Form';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'






export default class App extends React.Component {



  constructor() {
    console.log('constructor did run')
    super();
    this.state = {
      todos: [
        
      ],
      error: '',
      inputValue:""


    }


  }
  restForm = () => this.setState({...this.state, inputValue:''})
  setAxiosResponseError = err => this.setState({...this.state, error: err.response.data.message})

  handleAdd = () => {
    axios.post(URL, {name: this.props.inputValue})
    .then(res => {
     this.props.getTasks()
     this.props.restForm()
    })
    .catch(this.setAxiosResponseError)
   }
  
    handleDone = () => {
      this.setState({
        ...this.state,
        todos: this.state.todos.filter(todo => {
          return (todo.completed === false);
        })
      })
    }
  
     handleToggle = id => () => {
      axios.patch(`${URL}/${id}`)
      .then(res => {
        this.setState({
          ...this.state, todos: this.state.todos.map(td => {
            if(td.id !== id) return td 
            return res.data.data
          })
        })
      })
      .catch(this.setAxiosResponseError)
      
       }
   
  
  getTasks = () => {
    axios.get(URL)
      .then(res => {
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(this.setAxiosResponseError)

  }

  componentDidMount() {
    console.log('componenet did indeed mount')
     this.getTasks()
      
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleAdd();
    

     }

     

  handleChange = (e) => {
   const {value} = e.target
    this.setState({
      ...this.state,
      inputValue: value
    })

  }
 

  render() {
    const { todos } = this.state;
    return (
      <>
      {
        this.state.todos.map(td => {
          return <div onClick={this.handleToggle(td.id)} key={td.id}>{td.name}{td.completed ? '*' : ''}</div>
                 
        })

        
      }
         
        <TodoList 
        handleToggle={this.handleToggle} 
        todos={todos}  
        handleDone={this.handleDone}
        
        />
        <Form 
         handleAdd={this.handleAdd} 
         inputValue={this.state.inputValue} 
         handleSubmit={this.handleSubmit}
         handleChange={this.handleChange}
         handleDone={this.state.handleDone}
        />
        <button onClick={this.handleDone}>Tasks Done!</button>
      </>
    )
    } 
}

