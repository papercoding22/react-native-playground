import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ActivityScreen from './ActivityScreen.entry';
import {ActivityStackParamList} from './types';

const ActivityStack = createNativeStackNavigator<ActivityStackParamList>();

const ActivityStackScreen: React.FC<{
  screenOptions: NativeStackNavigationOptions;
}> = ({screenOptions}) => {
  return (
    <ActivityStack.Navigator screenOptions={screenOptions}>
      <ActivityStack.Screen name="Activity" component={ActivityScreen} />
    </ActivityStack.Navigator>
  );
};

export default ActivityStackScreen;
