import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from '../styles/add-todo';

export class AddTodo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text:''
    }
  }
  
  onTextInput = (text) => {
    this.setState({
      text
    })
  }
  render() {
    return (
      <View style={styles.view}>
        <TextInput value={this.state.text} onChangeText={this.onTextInput} style={styles.input}/>
        <Button title="Add" onPress={() => this.props.add(this.state.text)} style={styles.button}/>
      </View>
    )
  }
}

export default AddTodo;