import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';


class Hello extends Component {
    render() {
      return (
        <Text style={style.welcomeText}>Welcome {this.props.name}</Text>
      );
    }
}

const style = StyleSheet.create({
    welcomeText:{
        fontSize:22
    }
})
export default Hello;