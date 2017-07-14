import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import ToDoCell from './elements/toDoCell'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424146',
    paddingTop: 65,
  },

});

export default class Main extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 1, title: 'Finish react-native project', priority: 3, priorityText: "High"},
            {key: 2, title: 'Run for 10 minutes', priority: 1, priorityText: "Low"},
          ]}
          renderItem={({item}) => <ToDoCell item={item} />}
        />
      </View>
    )
  }
}
