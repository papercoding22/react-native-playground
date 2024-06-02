import React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
} as const;

const withBaseScreenOptions = (
  WrappedComponent: React.FC<{
    screenOptions: NativeStackNavigationOptions;
  }>,
  screenOptions = defaultOptions,
) => {
  return () => {
    return <WrappedComponent screenOptions={screenOptions} />;
  };
};

export default withBaseScreenOptions;
