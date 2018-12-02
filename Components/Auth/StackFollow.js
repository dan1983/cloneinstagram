import { createStackNavigator } from 'react-navigation';
import Profile from './Profile';
import Post from './Post';
import Comments from './Comments';
import TabFollow from './TabFollow';


const StackFollow = createStackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      header: null,
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


export { StackFollow };
