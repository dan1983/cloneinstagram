import React, { Component } from 'react';
import {
  Text, View, Button, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Form/SignInForm';


class SignIn extends Component {
  sigInUser = (values) => {
    this.props.login(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <SignInForm login={this.sigInUser}
        
        />
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

const mapStateToProps = (state) => ({
  prop:state.prop,
  
})

const mapDispatchToProps = dispatch => ({
  login:(data) =>{
    dispatch({ type: 'LOGIN', data });

  }
});





export default connect(mapStateToProps,mapDispatchToProps)(SignIn);