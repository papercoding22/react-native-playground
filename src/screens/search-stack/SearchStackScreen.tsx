import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SearchScreen from './SearchScreen.entry';
import {SearchStackParamList} from './types';

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackScreen: React.FC<{
  screenOptions: NativeStackNavigationOptions;
}> = ({screenOptions}) => {
  return (
    <SearchStack.Navigator screenOptions={screenOptions}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
