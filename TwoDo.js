import React from 'react';

import {
  Actions,
  Router,
  Scene
} from 'react-native-router-flux';

import MainView from './app/views/main';

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="main" title="Main" component={MainView} initial={true} />
  </Scene>
);

export default class App extends React.Component {
  render(){
    return <Router scenes={scenes} />
  }
}
