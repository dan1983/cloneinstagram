import React, { Component } from 'react';
import {
  Text, View, Button, StyleSheet,
} from 'react-native';
import SignInForm from './Form/SignInForm';


export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,


  },
});
