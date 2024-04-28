// ThemeProvider.tsx
import React, {PropsWithChildren, createContext, useMemo} from 'react';

import * as eva from '@eva-design/eva';
import {ApplicationProvider as UIKittenProvider} from '@ui-kitten/components';

import {useColorScheme} from 'react-native';
import theme from './theme';
import {Theme} from './types/types';

export interface ThemeContextProps extends Theme {}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const colorScheme = useColorScheme();

  const uiKittenTheme = useMemo(() => {
    return colorScheme === 'dark' ? eva.dark : eva.light;
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={theme.light}>
      <UIKittenProvider {...eva} theme={uiKittenTheme}>
        {children}
      </UIKittenProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
