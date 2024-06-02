import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import App from '@/App';
import useTheme from '@/theme/useTheme';

import {BottomNavItems} from './navigationConstants';
import useBottomNavigationOptions from './useBottomNavigationOptions';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
  const bottomNavigationOptions = useBottomNavigationOptions(theme);

  return (
    <Tab.Navigator screenOptions={bottomNavigationOptions}>
      <Tab.Screen name={BottomNavItems.Home.name} component={App} />
      <Tab.Screen name={BottomNavItems.Search.name} component={App} />
      <Tab.Screen name={BottomNavItems.Community.name} component={App} />
      <Tab.Screen name={BottomNavItems.Activity.name} component={App} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
