import React, {Component} from 'react';
import './styles.css';

class TodoList extends Component() {
  static defaultProps = {}

  constructor(props){
    super(props);
  }

  render(){
    return <div className={'TodoList'} />
  }
}

export default TodoList;
