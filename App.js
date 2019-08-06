/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux'
import {Posts} from './components/Posts';
import {Home} from './components/Home';

const App = () => {
  return (
      <Router>
        <Stack key="root">
          <Scene key="home" initial component={Home} title="Home" hideNavBar={true}/>
          <Scene key="posts" component={Posts} title="Posts"/>
        </Stack>
      </Router>
  );
};

export default App;
