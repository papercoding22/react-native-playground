import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import CommunityScreen from './CommunityScreen.entry';

const CommunityStack = createNativeStackNavigator();

const CommunityStackScreen: React.FC<{
  screenOptions: NativeStackNavigationOptions;
}> = ({screenOptions}) => {
  return (
    <CommunityStack.Navigator screenOptions={screenOptions}>
      <CommunityStack.Screen name="Community" component={CommunityScreen} />
    </CommunityStack.Navigator>
  );
};

export default CommunityStackScreen;
