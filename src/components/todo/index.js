import React, {Component} from 'react';
import './styles.css';

class Todo extends Component {
  static defaultProps = {
    task: '',
    id: '',
    completed: false,
    onEdit: ()=>{},
    onToggleCompleted: ()=>{}
  }

  constructor(props){
    super(props);
    this.state = {
      value: '',
      editing: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
  }

  render(){
    const {
      task,
      completed
    } = this.props;

    const {
      editing,
      value
    } = this.state;

    if(editing){
      return (
        <div className={'Todo'}>
          <form>
            <input
              type={'text'}
              id={'text'}
              name={'text'}
              value={value}
              onChange={this.handleOnChange}
            />
            <button onClick={this.handleOnSubmit}>Accept</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className={'Todo'}>
          <div
            className = {'Todo-task' + (completed ? ' Todo-completed' : '')}
            onClick = {this.handleToggleCompleted}
          >
            {task}
          </div>
          <div className={'Todo-controls'}>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleRemove}>Delete</button>
          </div>
        </div>
      );
    }
  }

  handleEdit(){
    const {
      task
    } = this.props;

    this.setState({
      editing: true,
      value: task
    })
  }

  handleRemove(){
    const {
      id,
      onRemove
    } = this.props;

    onRemove(id);
  }

  handleOnChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleOnSubmit(event){
    const {
      id,
      onEdit
    } = this.props;

    const {
      value
    } = this.state;

    event.preventDefault();

    onEdit(id, value);

    this.setState({editing: false})
  }

  handleToggleCompleted(){
    const {
      id,
      onToggleCompleted
    } = this.props;

    onToggleCompleted(id);
  }
}

export default Todo;
