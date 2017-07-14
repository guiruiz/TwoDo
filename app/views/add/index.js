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

import PriorityBar from './elements/priorityBar'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#424146'
    },
    box:{
      backgroundColor: '#2b2e35',
      paddingVertical: 30,
      paddingHorizontal: 10,
    },
    titleInput: {
      minWidth: 300,
      margin: 10,
      padding: 10,
      fontSize: 20,
      borderBottomWidth: 1,
      borderColor: '#777',
      borderStyle: 'solid',
      color: '#aaa'
    },
})

export default class Add extends React.Component {
  constructor(props){
    super(props);

    this.state = { title: ''}
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress(){

  }

  render(){
    return (
        <View style={styles.container}>
          <View style={styles.box}>

            <TextInput
              style={styles.titleInput}
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
              placeholder="Title"
              placeholderTextColor="#777"
            />

            <PriorityBar />

            <Button color="white" title="Save" onPress={this.handleOnPress}/>
          </View>
        </View>
    )
  }
}
