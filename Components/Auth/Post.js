import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Post extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
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
