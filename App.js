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
      idCount: 0,
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
      console.warn(err)
    }
  }
  async setTodoLocation(id, coords) {
    const { latitude, longitude } = coords;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${500}`
      )
      const data = await response.json()
      if (!data.error_message) {
        const address = data.results.formatted_address;
        const { todos } = this.state;
        todos
          .find(todo => todo.id === id)
          .location = address;
        this.setState({
          todos
        })
      }
      else{
        throw JSON.stringify(data)
      }

    }
    catch (error) {
      console.error(error)
    }
  }

  addTodo(text) {
    const id = this.state.idCount + 1
    this.setState({
      todos: [{ id, text }].concat(this.state.todos),
      idCount: id
    })

    if (this.state.geolocationPermissionGranted) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setTodoLocation(id, pos.coords)
      }, null, { enableHighAccuracy: true }
      )
    }
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