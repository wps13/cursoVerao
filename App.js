import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './Styles';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todos:[]
    }
  }
  render() {

    return (
      <View style={styles.container}>
       
      </View>
    );
  }
}


export default App;