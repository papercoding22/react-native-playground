import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.entry';
import {HomeStackParamList} from './types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackScreen: React.FC<{
  screenOptions: NativeStackNavigationOptions;
}> = ({screenOptions}) => {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
