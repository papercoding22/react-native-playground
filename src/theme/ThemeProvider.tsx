// ThemeProvider.tsx
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';

import {Theme} from './types';
import light from './light';
import dark from './dark';
import {useColorScheme} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

export interface ThemeContextProps extends Theme {
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDark, setIsDark] = useState(isDarkMode);

  const theme = isDark ? light : dark;

  useEffect(() => {
    setIsDark(isDarkMode);
  }, [isDarkMode]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{...theme, changeTheme}}>
      <ApplicationProvider {...eva} theme={eva[isDark ? 'dark' : 'light']}>
        {children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
