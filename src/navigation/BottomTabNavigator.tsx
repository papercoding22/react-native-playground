import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import App from '@/App';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabBarIcon from './BottomTabBarIcon';
import useTheme from '@/theme/useTheme';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

const ExampleScreen = ({label}: {label: string}) => {
  return <Text>{label}</Text>;
};

const Settings = () => <ExampleScreen label="Settings" />;

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsScreen" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: BottomTabBarIcon,
      }}>
      <Tab.Screen name="Home" component={App} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
