import React, {Component} from 'react';
import './styles.css';

class NewTodoForm extends Component() {
  static defaultProps = {}

  constructor(props){
    super(props);
  }

  render(){
    return <div className={'NewTodoForm'} />
  }
}

export default NewTodoForm;
