import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Button,
} from 'react-native';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> HOME </Text>
        <Button
          title="Author"
          onPress={() => { navigation.navigate('Profile'); }}
        />
      </View>
    );
  }
}
