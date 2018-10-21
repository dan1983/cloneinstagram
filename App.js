import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PathNotAutenticated } from './Components/notAuth/PathNotAuthenticated';
import { PathAuthenticated } from './Components/Auth/PathAuthenticated';
import Store from './Store/Store';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: 'instagram clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>

          <PathNotAutenticated />
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
