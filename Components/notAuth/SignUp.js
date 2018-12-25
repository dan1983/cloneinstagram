import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Form/SignUpForm';
import { actionRegistro } from '../../Store/Services/ACTIONS';

class SignUp extends Component {
registerUser = (values) => {
  this.props.register(values);
}

render() {
  const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <SignUpForm register={this.registerUser} />
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
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,


  },
});

const mapStateProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchProps = dispatch => ({
  register: (values) => {
    dispatch(actionRegistro(values));
  },
});


export default connect(mapStateProps, mapDispatchProps)(SignUp);
