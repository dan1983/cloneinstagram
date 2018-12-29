import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Button,
} from 'react-native';
import { auth } from '../../Store/Services/Firebase';

export default class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Author </Text>
        <Button
          title="Post"
          onPress={() => { navigation.navigate('Post'); }}
        />
         <Button
          title="Exit"
          onPress={() => { auth.signOut(); }}
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
