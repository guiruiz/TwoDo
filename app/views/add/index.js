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
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    titleInput: {
      minWidth: 300,
      margin: 10,
      padding: 10,
      fontSize: 20,
      borderWidth: 1,
      borderColor: '#eee',
      borderStyle: 'solid'
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

          <TextInput
            style={styles.titleInput}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            placeholder="Title"
          />

          <Button color="black" title="Save" onPress={this.handleOnPress}/>
        </View>
    )
  }
}
