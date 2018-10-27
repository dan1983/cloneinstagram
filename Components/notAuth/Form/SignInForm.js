import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
  console.log(props);
  return (
    <View style={styles.textInput}>
      <TextInput
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmPassword')}
        onBlur={props.input.onBlur}
      />
      <View style={styles.linea} />
      {props.meta.touched && props.meta.error && <Text underlineColorAndroid="rgba(0,0,0,0)">{props.meta.error}</Text>}

    </View>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'Must be at least 5 characters';
  } else if (values.password.length > 15) {
    errors.password = 'Must be less than 8 characters';
  }

  return errors;
};

const SignInForm = (props) => {
  console.log(props);
  return (
    <View>
      <Field name="email" component={fieldNombre} ph="email@email.com" />
      <Field name="password" component={fieldNombre} ph="******" />
      <Text>Redux Form</Text>
      <Button
        title="SignIn"
        onPress={props.handleSubmit((values) => {
          console.log(values);
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,

  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
