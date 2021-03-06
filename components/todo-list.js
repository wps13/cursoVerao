import React, { Component } from 'react';
import { View } from 'react-native';
import Todo from './todo';
import styles from '../styles/todo-list'

export class TodoList extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.todoList.map(todo => (
          <Todo navigate={this.props.navigate} 
          todo={todo} key={todo.id}/>
        ))}
      </View>
    )
  }
}

export default TodoList;