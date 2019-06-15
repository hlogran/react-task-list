import React, {Component} from 'react';
import './styles.css';

class NewTodoForm extends Component {
  static defaultProps = {
    onSubmit: ()=>{}
  };

  constructor(props){
    super(props)
    this.state = {
      task: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render(){
    const {
      task
    } = this.state;

    return (
      <div className={'NewTodoForm'}>
        <label htmlFor={'text'}>New Todo</label>
        <form>
          <input
            type={'text'}
            id={'text'}
            name={'text'}
            value={task}
            onChange={this.onChange}
            placeholder={'New Todo'}
          />
          <button onClick={this.onSubmit}>Add Todo</button>
        </form>
      </div>
    )
  }

  onChange(event){
    this.setState({
      task: event.target.value
    });
  }

  onSubmit(event){
    event.preventDefault();

    const {
      onSubmit
    } = this.props;

    const {
      task
    } = this.state;

    event.preventDefault();

    onSubmit(task);

    this.setState({task: ''});
  }
}

export default NewTodoForm;
