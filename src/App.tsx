import { FunctionComponent } from 'react';

import { ThemeControlsProvider } from './ThemeControlsProvider';
import { ThemeProviderWrapper } from './ThemeProviderWrapper';

import './App.scss';

const App: FunctionComponent = () => {
  return (
    <ThemeControlsProvider>
      <ThemeProviderWrapper />
    </ThemeControlsProvider>
  );
}

export default App;
