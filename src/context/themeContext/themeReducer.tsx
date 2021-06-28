import {Theme} from '@react-navigation/native';

type ThemeAction = {type: set_light_theme} | {type: set_dark_theme};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  backgroundColor: string;
}
export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0, 0.3)',
  backgroundColor: 'black',
  colors: {
    primary: '#5856d6',
    background: 'white',
    card: '#C4C4C4',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'gray',
  backgroundColor: 'white',
  colors: {
    primary: '#5856d6',
    background: 'black',
    card: '#C4C4C4',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme,
      };
    case 'set_dark_theme':
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
