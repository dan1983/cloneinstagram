import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';


const PathNotAutenticated = createStackNavigator(
  {
    SignIn: { screen: SignIn },


    SignUp: { screen: SignUp },
  },
);

export { PathNotAutenticated };
