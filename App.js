import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ScrollView, View, Text } from 'react-native';
import styles from './Styles';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';

const defaultNavigationOptions ={
  headerStyle:{
    backgrooundColor:'#1564bf',
    },
    headerTitleStye:{
      fontWeight:'bold',
      color:'white'
    }

}

class TodoDetails extends Component {
  static navigationOptions = {
    ...defaultNavigationOptions,
    title:'Todo'
  }
  render() {
    return (
      <View>
        <Text>change page</Text>
      </View>
    )
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    
  }

  addTodo(text) {
    const id = this.state.idCount + 1 
    this.setState({
      todos: [{ id,text }].concat(this.state.todos),
      idCount:id
    })
  }

  render() {

    return (
      <View style={styles.container}>
       <AddTodo add={text => this.addTodo(text)} />
        <ScrollView contentContainerStyle={styles.ScrollView}>
          <TodoList todoList={this.state.todos} navigate={this.props.navigation} />
        </ScrollView>
      </View>

    );

  }
}

const AppNavigator = createStackNavigator(
  {
    
    Home:{
    screen:App,
    navigationOptions:{
      header:null
    }},
    TodoDetails:{
      screen:TodoDetails
    }
  }
)

export default createAppContainer(AppNavigator);