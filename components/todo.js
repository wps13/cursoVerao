import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/todoStyle';


export class Todo extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    )
  }
}


export default Todo;