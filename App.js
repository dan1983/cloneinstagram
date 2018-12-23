import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { PathAuthenticated } from './Components/Auth/PathAuthenticated';
import Store from './Store/Store';
import Selector from './Selector';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: 'instagram clone' };
    console.ignoredYellowBox = [
      'Setting a timer',
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
        <Selector/>

        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
