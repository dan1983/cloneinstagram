import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';


const fieldName = () => <TextInput placeholder="writte name" />;

const SignUpForm = () => {
  <View>
    <Field name="name" component={fieldName} />
  </View>;
};

export default reduxForm({ form: 'SignUpFomr' })(SignUpForm);
