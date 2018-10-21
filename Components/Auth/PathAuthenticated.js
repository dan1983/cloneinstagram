import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import Add from './Add';
import Profile from './Profile';
import Search from './Search';

import { StackSearch } from './StackSearch';
import { TabFollow } from './TabFollow';

const PathAuthenticated = createBottomTabNavigator({
  Home: {
    screen: StackHome,

  },
  Search: {
    screen: StackSearch,

  },
  Add: {
    screen: Add,

  },
  Follow: {
    screen: TabFollow,
  },
  Profile: {
    screen: Profile,
  },

});
export { PathAuthenticated };
