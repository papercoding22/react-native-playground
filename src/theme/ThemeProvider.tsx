// ThemeProvider.tsx
import React, {PropsWithChildren, createContext, useMemo} from 'react';

import * as eva from '@eva-design/eva';
import {ApplicationProvider as UIKittenProvider} from '@ui-kitten/components';

import {ColorSchemeName, useColorScheme} from 'react-native';
import theme from './theme';
import {Theme} from './types/types';

export interface ThemeContextProps extends Theme {}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const buildComponentTheme = (rawTheme: Theme) => {
  return {
    components: {
      layout: {
        background: rawTheme.colors.surface,
      },
      card: {
        background: rawTheme.colors.surfaceContainer,
      },
      bottomTabBar: {
        background: rawTheme.colors.surfaceContainer,
        shadow: {
          shadowColor: rawTheme.colors.shadow,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: rawTheme.elevations.level1,
        },
      },
      topTabBar: {
        background: rawTheme.colors.surfaceContainer,
        indicatorStyle: {
          backgroundColor: rawTheme.colors.primary,
          width: 100,
        },
        focusedTextStyle: {
          ...rawTheme.typeScale.titleMedium,
          color: rawTheme.colors.onSurface,
        },
        unfocusedTextStyle: {
          ...rawTheme.typeScale.titleMedium,
          color: rawTheme.colors.onSurfaceVariant,
        },
        shadow: {
          shadowColor: rawTheme.colors.shadow,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: rawTheme.elevations.level1,
        },
      },
      navigationTheme: {
        primary: rawTheme.colors.primary,
        background: rawTheme.colors.surface,
        card: rawTheme.colors.surfaceContainer,
      },
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
