import React, {useEffect, useReducer} from 'react';
import {createContext} from 'react';
import {Appearance, AppState} from 'react-native';
import {darkTheme, lightTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemesContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemesContextProps);

export const ThemeProvider = ({children}: any) => {
  // const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);
  // useEffect(() => {
  //   colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  // }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{setLightTheme, setDarkTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
