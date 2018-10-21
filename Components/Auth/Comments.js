import React, { Component } from 'react';
import {
  Text, View, Button, StyleSheet,
} from 'react-native';

export default class Comments extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Comments </Text>
        <Button
          title="Autor"
          onPress={() => { navigation.navigate('Profile'); }}
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
    backgroundColor: '#2c3e50',

  },
});
