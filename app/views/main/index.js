import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default class Main extends React.Component {

  render(){
    return (
        <View style={styles.container}>
          <View style={styles.content} >
          </View>
        </View>
    )
  }
}
