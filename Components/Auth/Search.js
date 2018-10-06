import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> SEARCH </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
});
