import {ThemeContextProps} from '@/theme/ThemeProvider';
import React from 'react';

import BottomTabBarIcon from './BottomTabBarIcon';

const useBottomNavigationOptions = (theme: ThemeContextProps) => {
  const bottomNavigationOptions = React.useMemo(() => {
    return {
      headerShown: false,
      tabBarIcon: BottomTabBarIcon,
      tabBarStyle: {
        backgroundColor: theme.bottomNavigationTheme.background,
      },
      tabBarActiveTintColor: theme.colors.onSurface,
      tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
    };
  }, [theme]);

  return bottomNavigationOptions;
};

export default useBottomNavigationOptions;
