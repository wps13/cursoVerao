import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './Styles';
import TodoList from './components/todo-list';
import addTodo, { AddTodo } from './components/add-todo';

class App extends Component{
  constructor(){
    super();
    const todo1={
      text:'Todo 1'
    }
    const todo2={
      text:'Todo 2'
    }
    this.state = {
      todos:[todo1,todo2]
    }
  }

  addTodo(text){
    this.setState({
      todos:this.state.todos.concat([{text}])
    })
  }

  render() {

    return (
      <View style={styles.container}>
      <AddTodo add={text => this.addTodo(text)} />
       <TodoList todoList={this.state.todos} />
      </View>
    );

  }
}


export default App;