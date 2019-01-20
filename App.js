import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ScrollView, View, Text, PermissionsAndroid } from 'react-native';
import styles from './Styles';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';

const defaultNavigationOptions = {
  headerStyle: {
    backgrooundColor: '#1564bf',
  },
  headerTitleStye: {
    fontWeight: 'bold',
    color: 'white'
  }

}

class TodoDetails extends Component {
  static navigationOptions = {
    ...defaultNavigationOptions,
    title: 'Todo'
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
      todos: [],
      isGranted: ''
    }
    this.requestMapsPermission()
  }
  async requestMapsPermission() {
    try {
      const isGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Todo app location access',
          'message': 'We need location'
        }
      )
      this.setState({
        geolocationPermissionGranted: isGranted,
      })
    }
    catch (err) {
      return;
    }
  }

  addTodo(text) {
    const id = this.state.idCount + 1
    this.setState({
      todos: [{ id, text }].concat(this.state.todos),
      idCount: id
    })
  }

  render() {
    console.warn(this.state.isGranted)
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

    Home: {
      screen: App,
      navigationOptions: {
        header: null
      }
    },
    TodoDetails: {
      screen: TodoDetails
    }
  }
)

export default createAppContainer(AppNavigator);