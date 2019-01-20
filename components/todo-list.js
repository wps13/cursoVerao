import React, { Component } from 'react';
import { View } from 'react-native';
import Todo from './todo';
import styles from '../styles/todo-list'

export class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>
       {this.props.todoList.map( todo => (
         <Todo text={todo.text} />
       ))}
      </View>
    )
  }
}

export default TodoList;