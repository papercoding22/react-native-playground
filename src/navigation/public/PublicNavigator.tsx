import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@/screens';

const PublicStack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen name="Login" component={LoginScreen} />
    </PublicStack.Navigator>
  );
};

export default PublicNavigator;
