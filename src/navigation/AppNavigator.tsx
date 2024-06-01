/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import {Button, Text, View, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useTheme from '@/theme/useTheme';
import {LoginScreen} from '@/screens';

const RootStack = createNativeStackNavigator();

function ModalScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

/**
 * Root navigator of the app.
 *
 * @returns {React.ReactElement} Root navigator.
 */
function AppNavigator() {
  const scheme = useColorScheme();
  const theme = useTheme();
  const navigationTheme = scheme === 'dark' ? DarkTheme : DefaultTheme;
  const overridedTheme: Theme = {
    ...navigationTheme,
    colors: {
      ...navigationTheme.colors,
      primary: theme.navigationTheme.primary,
      background: theme.navigationTheme.background,
      card: theme.colors.surfaceContainer,
    },
  };

  // TODO: Implement authentication flow later
  const isAuthenticated = true;

  return (
    <NavigationContainer theme={overridedTheme}>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <RootStack.Group screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Root" component={BottomTabNavigator} />
          </RootStack.Group>
        ) : (
          <RootStack.Group screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Login" component={LoginScreen} />
          </RootStack.Group>
        )}
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
