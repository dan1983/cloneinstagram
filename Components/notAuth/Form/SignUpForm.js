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

const fieldImg = props => (
      <View><View>
        {props.meta.touched && 
           props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
      </View></View>);

const validate = (values,props) => {
  const errors = {};
  if(!props.img){
    errors.image = 'imagen es requerida';
  }
  if (!values.name) {
    errors.name = 'required';
  } else if (values.name.length < 4) {
    errors.name = 'Must be at least 5 characters';
  } else if (values.name.length > 8) {
    errors.name = 'Must be less than 10 characters';
  }

  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email';
  }

  /*
  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 4) {
    errors.password = 'Must be at least 4 characters';
  } else if (values.password.length > 1) {
    errors.password = 'Must be less than 1 characters';
  }
  */

  if (!values.confirmPassword) {
    errors.confirmPassword = 'required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'The password must match';
  }

  return errors;
};

const SignUpForm = props => (
  <View style={styles.container}>
    <Field name="image" component={fieldImg} />
    <Field name="name" component={fieldName} ph="name" />
    <Field name="email" component={fieldName} ph="email" />
    <Field name="password" component={fieldName} ph="******" />
    <Field name="confirmPassword" component={fieldName} ph="******" />

    <Button
      title="Register"
      onPress={props.handleSubmit(props.register,
        /*
        (values) => {
          auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((success) => {
              console.log(success);
            })
            .catch((error) => {
            // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
            // ...
            });
        },
     */
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container:{flex:3},
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
