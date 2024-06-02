import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';
import {PrivateStackParamList} from './types';

const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();

function ModalScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const PrivateNavigator = () => {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Group screenOptions={{headerShown: false}}>
        <PrivateStack.Screen name="Root" component={BottomTabNavigator} />
      </PrivateStack.Group>
      <PrivateStack.Group screenOptions={{presentation: 'modal'}}>
        <PrivateStack.Screen name="MyModal" component={ModalScreen} />
      </PrivateStack.Group>
    </PrivateStack.Navigator>
  );
};

export default PrivateNavigator;
