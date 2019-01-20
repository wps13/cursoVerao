import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import styles from '../styles/todoStyle';


export class Todo extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <TouchableNativeFeedback onPress={() => {
        this.props.navigate.navigate('TodoDetails')
      }} 
      >
        <View style={styles.box}>
          <Text style={styles.text}> {this.props.text} </Text>
        </View>
      </TouchableNativeFeedback>

    )
  }
}


export default Todo;