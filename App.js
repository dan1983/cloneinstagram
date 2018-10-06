import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PathNotAutenticated } from './Components/notAuth/PathNotAuthenticated';
import { PathAuthenticated } from './Components/Auth/PathAuthenticated';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: 'instagram clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <PathAuthenticated />

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
