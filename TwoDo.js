import React from 'react';

import {
  Actions,
  Router,
  Scene
} from 'react-native-router-flux';

import LaunchView from './app/views/launch';
import MainView from './app/views/main';
import AddView from './app/views/add';

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="launch" title="Launch" component={LaunchView} initial={true} />
    <Scene key="main" title="Main" component={MainView} />
    <Scene key="add" title="Add" component={AddView} />
  </Scene>
);

export default class App extends React.Component {
  render(){
    return <Router scenes={scenes} />
  }
}
