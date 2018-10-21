import { createStackNavigator } from 'react-navigation';
import Search from './Search';
import Profile from './Profile';
import Post from './Post';
import Comments from './Comments';


const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
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
StackSearch.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptions = {};


  if (routeName === 'Comments') { navigationOptions.tabBarVisible = false; }
  return navigationOptions;
};

export { StackSearch };
