import React, { Component } from 'react';
import { View } from 'react-native';
import Todo from './todo';

export class TodoList extends Component {
  render() {
    return (
      <View>
       {this.props.todoList.map( todo => (
         <Todo text={todo.text} />
       ))}
      </View>
    )
  }
}

export default TodoList;