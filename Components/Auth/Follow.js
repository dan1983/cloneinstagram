import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Button,
} from 'react-native';

export default class Follow extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> follow </Text>
        <Button
          title="Comments"
          onPress={() => { navigation.navigate('Comments'); }}
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

  },
});
