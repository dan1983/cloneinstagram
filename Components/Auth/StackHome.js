import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import Comments from './Comments';

const StackHome = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'SignIn to Instaclone',
    },
  },
  Profile: {
    screen: Profile,
  },

  Post: {
    screen: Post,

  },
  Comments: {
    screen: Comments,

  },


});


StackHome.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptions = {};


  if (routeName === 'Comments') { navigationOptions.tabBarVisible = false; }
  return navigationOptions;
};


export { StackHome };
