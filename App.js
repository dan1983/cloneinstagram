import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PathNotAutenticated } from './Components/notAuth/PathNotAuthenticated';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: 'instagram clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <PathNotAutenticated />

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
