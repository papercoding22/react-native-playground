import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';

import {useColorScheme} from 'react-native';

import {useTheme} from '@/theme';

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
      primary: theme.components.navigationTheme.primary,
      background: theme.components.navigationTheme.background,
      card: theme.colors.surfaceContainer,
    },
  };

  return (
    <NavigationContainer theme={overridedTheme}>{children}</NavigationContainer>
  );
};

export default BaseNavigationContainer;
