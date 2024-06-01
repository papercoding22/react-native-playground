// ThemeProvider.tsx
import React, {PropsWithChildren, createContext, useMemo} from 'react';

import * as eva from '@eva-design/eva';
import {ApplicationProvider as UIKittenProvider} from '@ui-kitten/components';

import {ColorSchemeName, useColorScheme} from 'react-native';
import theme from './theme';
import {Theme} from './types/types';

export interface ThemeContextProps extends Theme {
  navigationTheme: {
    primary: string;
    background: string;
    card: string;
  };
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const buildComponentTheme = (rawTheme: Theme): ThemeContextProps => {
  return {
    ...rawTheme,
    navigationTheme: {
      primary: rawTheme.colors.primary,
      background: rawTheme.colors.surface,
      card: rawTheme.colors.surfaceContainer,
    },
  };
};

const useAppTheme = (colorScheme: ColorSchemeName): ThemeContextProps => {
  const rawTheme = useMemo(() => {
    return colorScheme === 'dark' ? theme.dark : theme.light;
  }, [colorScheme]);

  const componentTheme = useMemo(
    () => buildComponentTheme(rawTheme),
    [rawTheme],
  );

  const appTheme = useMemo(
    () => ({...rawTheme, ...componentTheme}),
    [rawTheme, componentTheme],
  );

  return appTheme;
};

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const colorScheme = useColorScheme();
  const appTheme = useAppTheme(colorScheme);

  const uiKittenTheme = useMemo(() => {
    return colorScheme === 'dark' ? eva.dark : eva.light;
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={appTheme}>
      <UIKittenProvider {...eva} theme={uiKittenTheme}>
        {children}
      </UIKittenProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
