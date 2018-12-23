import React, { Component } from 'react'
import {View,Text, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import { auth } from './Store/Services/Firebase';
import { PathNotAutenticated } from './Components/notAuth/PathNotAuthenticated';
import { actionSetSession, actionCloseSession} from './Store/Services/ACTIONS';

 class Selector extends Component {
     componentDidMount = () => {
         this.props.autentificacion();
       
     }
     
  render() {
    return (
      <View style={styles.c}>
            <PathNotAutenticated/>
      </View>
    )
  }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }

});

const mapStateToProps = (state)=>{
    return {
        prop:state.prop
    }

} 

mapDispatchToProps = (dispatch) =>({
    
        autentificacion:()=>{
            //dispatch(actionCreator)
            auth.onAuthStateChanged(function(user){

                if (user) {
                    console.log(user.toJSON());
                  
                   dispatch(actionSetSession(user));
                  } else {
                    console.log('No existe sesión');
                    dispatch(actionCloseSession());
                  }
            })
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(Selector)

