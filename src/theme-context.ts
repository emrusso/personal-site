import { Dispatch, SetStateAction, createContext } from 'react';
import { LightTheme, Theme } from './theme';

export type ColorThemes = 'light' | 'dark';

interface ThemeState {
  color: ColorThemes;
  garden: boolean;
  setColor: Dispatch<SetStateAction<ColorThemes>>;
  setGarden: Dispatch<SetStateAction<boolean>>;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeState>({
  color: 'light',
  garden: false,
  setColor: () => {},
  setGarden: () => {},
  theme: LightTheme
});

