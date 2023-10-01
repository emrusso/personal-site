import { FunctionComponent } from 'react';

import { ThemeControlsProvider } from './theme-controls-provider';
import { ThemeProviderWrapper } from './theme-provider-wrapper';

import './App.scss';

const App: FunctionComponent = () => {
  return (
    <ThemeControlsProvider>
      <ThemeProviderWrapper />
    </ThemeControlsProvider>
  );
}

export default App;
