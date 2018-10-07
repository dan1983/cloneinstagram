import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Button,
} from 'react-native';

export default class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Author </Text>
        <Button
          title="Post"
          onPress={() => { navigation.navigate('Post'); }}
        />
      </View>
    );
  }
}
