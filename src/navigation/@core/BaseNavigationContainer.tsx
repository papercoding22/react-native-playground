import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';

import {useColorScheme} from 'react-native';

import useTheme from '@/theme/useTheme';

const BaseNavigationContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
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

  return (
    <NavigationContainer theme={overridedTheme}>{children}</NavigationContainer>
  );
};

export default BaseNavigationContainer;
