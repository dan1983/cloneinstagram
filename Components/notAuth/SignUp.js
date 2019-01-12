import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Form/SignUpForm';
import { actionRegistro,actionLoadImgSignUp,actionClearImgSignUp } from '../../Store/Services/ACTIONS';
import SelectImg from '../SelectImg';
import {blur,change} from 'redux-form';

class SignUp extends Component {

  componentWillUnmount() {
    this.props.cleanImg();
  }
  

registerUser = (values) => {
  this.props.register(values);
}

render() {
  const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
     
    
      <SelectImg img={this.props.image.image} load={this.props.loadImg}/>
      <SignUpForm register={this.registerUser}  img={this.props.image.image}/>
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
  image: state.reducerImgSignUp
});

const mapDispatchProps = dispatch => ({
  register: (values) => {
    dispatch(actionRegistro(values));
  },
  loadImg: (image) => {
    dispatch(actionLoadImgSignUp(image));
    // este es la manera de validad la img video 57  se llama al siguform y ejecuta la validacion
    dispatch(blur('SignUpFomr','image', Date.now()));
  
  },
  cleanImg: () => {
    dispatch(actionClearImgSignUp());
  },

});




export default connect(mapStateProps, mapDispatchProps)(SignUp);
