import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import Add from './Add';
import Profile from './Profile';
import Search from './Search';
import Follow from './Follow';

const PathAuthenticated = createBottomTabNavigator({
  Home: {
    screen: StackHome,

  },
  Search: {
    screen: Search,

  },
  Add: {
    screen: Add,

  },
  Follow: {
    screen: Follow,
  },
  Profile: {
    screen: Profile,
  },

});
export { PathAuthenticated };
