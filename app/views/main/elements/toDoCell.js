import React from 'react'

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Slider,
  Button,
} from 'react-native'

import { Actions } from 'react-native-router-flux'


const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2e35',
    borderBottomWidth: 2,
    borderColor: '#424146'
  },
  priority: {
    width: 7,
    height: '100%',
    backgroundColor: '#f00',
    marginRight: 20,
  },
  low:{
    backgroundColor: '#87bb7d'
  },
  medium:{
    backgroundColor: '#e4bf7f'
  },
  high:{
    backgroundColor: '#de6d77'
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: 'white'
  },
  doneContainer: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
  }
})

export default class ToDoCell extends React.Component {
  constructor(props){
    super(props)
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress() {
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={[styles.priority, styles[this.props.item.priorityText.toLowerCase()]]}></View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.item.title}</Text>
        </View>
        <View style={styles.doneContainer}>
          <Button color="#87bb7d" title="Done" onPress={this.handleOnPress}/>
        </View>
      </View>
    )
  }
}
