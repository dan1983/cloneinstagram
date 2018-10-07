import React, { Component } from 'react';
import { Text, View , Button } from 'react-native';

export default class Comments extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title="Autor"
          onPress={() => { navigation.navigate('Author'); }}
        />
      </View>
    );
  }
}
