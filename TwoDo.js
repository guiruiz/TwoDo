import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Actions,
  Router,
  Scene
} from 'react-native-router-flux';

import LaunchView from './app/views/launch';
import MainView from './app/views/main';
import AddView from './app/views/add';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#87bb7d'
  },
  navBarTitle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  barButtonTextStyle:{
    color:'white'
  },
  barButtonIconStyle:{
    tintColor:'white'
  },
});

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="launch" title="Launch" component={LaunchView} initial />
    <Scene key="app"
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navBarTitle}
      leftButtonTextStyle={styles.barButtonTextStyle}
      rightButtonTextStyle={styles.barButtonTextStyle}
      barButtonIconStyle={styles.barButtonIconStyle}>
      <Scene key="main" title="IIDO" component={MainView}
        onRight={() => Actions.add()}
        rightTitle="Add"/>
      <Scene key="add" title="Add ToDo" component={AddView} />
    </Scene>
  </Scene>
);

export default class App extends React.Component {
  render(){
    return <Router scenes={scenes} />
  }
}
