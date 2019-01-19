import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Hello from './Hello';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;