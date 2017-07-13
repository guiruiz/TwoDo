import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';

import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      paddingBottom: 15
    },
    titleInput: {
      marginTop: 20,
      padding: 10,
      fontSize: 30,
    },
    textInput: {
      marginTop: 10,
      padding: 10,
      fontSize: 15,
      flex:1
    }
})

export default class Add extends React.Component {
  constructor(props){
    super(props);

    this.state = { title: '', text: ''}
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress(){
    
  }

  render(){
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.titleInput}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            placeholder="Title"
          />

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline = {true}
            placeholder="Text"
          />

          <Button color="black" title="Save" onPress={this.handleOnPress}/>
        </View>
    )
  }
}
