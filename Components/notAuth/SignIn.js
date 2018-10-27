import React, { Component } from 'react';
import {
  Text, View, Button,
} from 'react-native';
import SignInForm from './Form/SignInForm';


export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> SignIn </Text>
        <SignInForm />
        <Button
          title="SingUp"
          onPress={() => { navigation.navigate('SignUp'); }}
        />
      </View>
    );
  }
}
