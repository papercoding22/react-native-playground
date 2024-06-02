import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import App from '@/App';
import useTheme from '@/theme/useTheme';

import BottomTabBarIcon from './BottomTabBarIcon';
import {BottomNavItems} from './navigationConstants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: BottomTabBarIcon,
        tabBarStyle: {
          backgroundColor: theme.bottomNavigationTheme.background,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: theme.colors.onSurface,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
      }}>
      <Tab.Screen name={BottomNavItems.Home.name} component={App} />
      <Tab.Screen name={BottomNavItems.Search.name} component={App} />
      <Tab.Screen name={BottomNavItems.Community.name} component={App} />
      <Tab.Screen name={BottomNavItems.Activity.name} component={App} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
