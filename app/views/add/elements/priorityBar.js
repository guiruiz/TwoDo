import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Slider,
  Button,
} from 'react-native';

import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  panel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#777',
    fontSize: 20,
  },
  slider: {
    width: '100%',
    marginTop: 20
  },
  title: {
    fontSize: 20,
    marginLeft: 5
  },
  low:{
    color: '#87bb7d'
  },
  medium:{
    color: '#e4bf7f'
  },
  high:{
    color: '#de6d77'
  }
})

export default class PriorityBar extends React.Component {
  constructor(props){
    super(props)
    this.state = { priority: 2, priorityText: "Medium"}
    this.handleOnValueChange = this.handleOnValueChange.bind(this)
  }

  handleOnValueChange(value){
    var priorityText
    switch (value) {
      case 1:
        priorityText = 'Low'
        break
      case 2:
        priorityText = 'Medium'
        break
      case 3:
        priorityText = 'High'
        break
    }

    this.setState({priority: value, priorityText})
  }

  render(){
    return (
        <View style={styles.container}>
          <View style={styles.panel}>
            <Text style={styles.label}>Priority:</Text>
            <Text style={[styles.title, styles[this.state.priorityText.toLowerCase()]]}>
              {this.state.priorityText}
            </Text>
          </View>
          <Slider
            minimumValue={1}
            maximumValue={3}
            step={1}
            value={this.state.priority}
            style={styles.slider}
            minimumTrackTintColor={'#de6d77'}
            maximumTrackTintColor={'#87bb7d'}
            onValueChange={this.handleOnValueChange}
          />

        </View>
    )
  }
}
