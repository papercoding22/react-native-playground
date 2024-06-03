import React from 'react';
import {BouncyButton} from '@/components';

import {ThemeContextProps} from '@/theme/ThemeProvider';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import BottomTabBarIcon from './BottomTabBarIcon';

const useBottomNavigationOptions = (theme: ThemeContextProps) => {
  const bottomNavigationOptions: BottomTabNavigationOptions =
    React.useMemo(() => {
      return {
        headerShown: false,
        tabBarIcon: BottomTabBarIcon,
        tabBarButton: props => {
          return <BouncyButton {...props} />;
        },
        tabBarStyle: {
          ...theme.bottomTabBar.shadow,
          backgroundColor: theme.bottomTabBar.background,
        },
        tabBarActiveTintColor: theme.colors.onSurface,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
      };
    }, [theme]);

  return bottomNavigationOptions;
};

export default useBottomNavigationOptions;
