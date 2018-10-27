import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';


const fieldName = props => (
  <View style={styles.textInput}>

    <TextInput
      underlineColorAndroid="rgba(0,0,0,0)"
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardTYpe={props.input.name === 'name' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!((props.input.name === 'password' || props.input.name === 'confirmPassword'))}
      onBlur={props.input.onBlur}
    />
    {props.meta.touched && props.meta.error && <Text>{props.meta.error}</Text>}
  </View>


);

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'required';
  } else if (values.name.length < 5) {
    errors.name = 'Must be at least 5 characters';
  } else if (values.name.length > 10) {
    errors.name = 'Must be less than 10 characters';
  }

  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email';
  }

  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 5) {
    errors.password = 'Must be at least 5 characters';
  } else if (values.password.length > 8) {
    errors.password = 'Must be less than 8 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'The password must match';
  }

  return errors;
};

const SignUpForm = props => (
  <View>
    <Field name="name" component={fieldName} ph="name" />
    <Field name="email" component={fieldName} ph="email" />
    <Field name="password" component={fieldName} ph="******" />
    <Field name="confirmPassword" component={fieldName} ph="******" />

    <Button
      title="Sigin"
      onPress={props.handleSubmit(
        (values) => {
          console.log(values);
          values;
        },
      )}
    />
  </View>
);

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
export default reduxForm({ form: 'SignUpFomr', validate })(SignUpForm);
