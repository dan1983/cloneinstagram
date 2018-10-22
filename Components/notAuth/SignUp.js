import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from "../Form/SignUpForm";

class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignUp </Text>
        <SignUpForm />
        <Button
          title="Aumentar"
          onPress={() => this.props.aumentar}
        />
        <Button
          title="SignIn"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

const mapStateProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});


export default connect(mapStateProps, mapDispatchProps)(SignUp);
