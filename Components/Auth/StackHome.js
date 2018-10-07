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
    navigationOptions: {
      tabBarVisible: false,
    },
  },


});
export { StackHome };
