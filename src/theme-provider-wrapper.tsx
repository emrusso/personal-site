import { FunctionComponent, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './theme-context';
import { Body } from './app-body';

export const ThemeProviderWrapper: FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Body />
    </ThemeProvider>
  );
};
