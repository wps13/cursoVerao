import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Hello from './Hello';
import styles from './Styles';

class App extends Component{
  constructor(){
    super();
    this.state = {name:'João'}
  }
  render() {
    const result = 1;
    return (
      <View style={styles.container}>
        <Hello name="Maira" />
        <Text style={styles.welcome}>{result}</Text>
      </View>
    );
  }
}


export default App;