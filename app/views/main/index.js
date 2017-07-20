import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import TaskCell from './elements/taskCell'

import Task from '../../models/Task'

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
            new Task({key: 1, title: 'Finish react-native project', priority: 3}),
            new Task({key: 2, title: 'Run for 10 minutes', priority: 1}),
          ]}
          renderItem={({item}) => <TaskCell item={item} />}
        />
      </View>
    )
  }
}
