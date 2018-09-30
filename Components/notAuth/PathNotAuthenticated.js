import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const SignIn = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Componente SignIn</Text>
      <Button
        title="Navegador a las SingUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Componente SignUp</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
const PathNotAutenticated = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },


});
export { PathNotAutenticated };
