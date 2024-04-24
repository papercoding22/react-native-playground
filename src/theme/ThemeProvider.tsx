// ThemeProvider.tsx
import React, {PropsWithChildren, createContext} from 'react';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import theme from './theme';
import {Theme} from './types/types';

export interface ThemeContextProps extends Theme {}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <ThemeContext.Provider value={theme.light}>
      <ApplicationProvider {...eva} theme={eva.light}>
        {children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
