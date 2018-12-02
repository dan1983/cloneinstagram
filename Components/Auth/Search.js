import React, { Component } from 'react';
import {
 Text, View, StyleSheet, Button 
} from 'react-native';

export default class Search extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SEARCH </Text>
        <Button
          title="Post"
          onPress={() => { navigation.navigate('Post'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});
