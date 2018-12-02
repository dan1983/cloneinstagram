import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Follow from './Follow';


const TabFollow = createMaterialTopTabNavigator({
  Follow: {
    screen: Follow,
  },
  Followers: {
    screen: Follow,
  },


},
{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },

  },


});
export { TabFollow };
