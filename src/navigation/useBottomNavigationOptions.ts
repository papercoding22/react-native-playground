import React from 'react';
import {ThemeContextProps} from '@/theme/ThemeProvider';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import BottomTabBarIcon from './BottomTabBarIcon';

const useBottomNavigationOptions = (theme: ThemeContextProps) => {
  const bottomNavigationOptions: BottomTabNavigationOptions =
    React.useMemo(() => {
      return {
        headerShown: false,
        tabBarIcon: BottomTabBarIcon,
        tabBarStyle: {
          backgroundColor: theme.bottomNavigationTheme.background,
          shadowColor: theme.colors.shadow,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: theme.elevations.level5,
        },
        tabBarActiveTintColor: theme.colors.onSurface,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
      };
    }, [theme]);

  return bottomNavigationOptions;
};

export default useBottomNavigationOptions;
