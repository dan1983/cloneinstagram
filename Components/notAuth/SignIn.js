import React, { Component } from 'react';
import {
  Text, View, Button,
} from 'react-native';


export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> SignIn </Text>
        <Button
          title="SingUp"
          onPress={() => { navigation.navigate('SignUp'); }}
        />
      </View>
    );
  }
}
