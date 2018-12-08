import React, { Component } from 'react'
import {View,Text,StyleSheet} from react-native;
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { auth } from './Store/Services/Firebase';
import {PathAuthenticated}  from './Components/Auth/PathAuthenticated'

export class select extends Component {
    componentDidMount = () => {
        this.props.autentificacion();
      
    }
    
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View>>
     
     /* ME QUEDE EN EL VIDEO  51  MIN 7.29 */

        <PathAuthenticated/>

      </View>
        
    
    )
  }
}

const mapStateToProps = (state) => ({
    prop:state.prop
  
});

const mapDispatchToProps = dispatch => ({
  autentificacion: ()=>{

    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log(user);
        }else{
            console.log("no exsite session");

        }
      });

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(select)

