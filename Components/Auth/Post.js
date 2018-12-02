import React, { Component } from 'react';
import {
  Text, View, Button, StyleSheet,
} from 'react-native';

export default class Post extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> POST </Text>
        <Button
          title="Comments"
          onPress={() => { navigation.navigate('Comments'); }}
        />
        <Button
          title="Authors"
          onPress={() => { navigation.navigate('Profile'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
