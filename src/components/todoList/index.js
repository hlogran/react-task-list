import React, {Component} from 'react';
import './styles.css';
import Todo from '../todo';
import NewTodoForm from '../newTodoForm';
import uuid from 'uuid';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {todos: [
      {id: uuid(), task: 'Sample TODO 1'},
      {id: uuid(), task: 'Sample TODO 2'}
    ]};
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  render(){
    const {
      todos
    } = this.state;

    return (
      <div className={'TodoList'}>
        <h1>Todo List! <span>A Simple React Todo List App.</span></h1>
        <div className={'TodoList-list'}>
          {todos.map(t => {
            return (
              <Todo
                key={t.id}
                id={t.id}
                task={t.task}
                completed={t.completed}
                onRemove={this.remove}
                onEdit={this.editTask}
                onToggleCompleted={this.toggleCompleted}
              />
            )
          })}
        </div>
        <NewTodoForm onSubmit={this.add}/>
      </div>
    )
  }

  remove(id){
    console.log(id)
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }

  add(task){
    if(task && task.trim() !== ''){
      this.setState({
        todos: [...this.state.todos, {id: uuid(), task}]
      });
    } else {
      alert('Please, type some task name')
    }
  }

  editTask(id, task){
    this.updateTodo(id, t => t.task = task);
  }

  toggleCompleted(id){
    this.updateTodo(id, t => t.completed = !t.completed);
  }

  updateTodo(id, updateFunction){
    this.setState({
      todos: this.state.todos.map( t => {
        if (t.id === id){
          updateFunction(t);
        }
        return t;
      })
    });
  }
}

export default TodoList;
