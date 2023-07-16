import { FunctionComponent, ReactNode, useEffect, useState } from 'react';

import { ColorThemes, ThemeContext } from "./theme-context";
import { DarkGardenTheme, DarkTheme, LightGardenTheme, LightTheme, Theme } from './theme';

interface ThemeControlsProviderProps {
  children: ReactNode | ReactNode[];
}

export const ThemeControlsProvider: FunctionComponent<ThemeControlsProviderProps> = ({ children }) => {
  const [color, setColor] = useState<ColorThemes>('light');
  const [garden, setGarden] = useState(false);
  const [theme, setTheme] = useState<Theme>(LightTheme);

  useEffect(() => {
    if (garden) {
      setTheme(color === 'light' ? LightGardenTheme : DarkGardenTheme);
    } else {
      setTheme(color === 'light' ? LightTheme : DarkTheme);
    }
  }, [color, garden]);

  return <ThemeContext.Provider value={{ color, garden, setColor, setGarden, theme }}>{children}</ThemeContext.Provider>
};
