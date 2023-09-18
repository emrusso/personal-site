import { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './theme-context';

interface ThemeControlsProps extends HTMLAttributes<HTMLDivElement> {}
interface ThemeSwitchProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ThemeSwitch: FunctionComponent<ThemeSwitchProps> = ({ label, ...props }) => (
  <button
    aria-checked={props['aria-checked']}
    className="theme-controls__switch"
    type="button"
    role="switch"
    {...props}
  >
    <span>{label}</span>
    <span aria-hidden className="material-symbols-outlined">
      {props['aria-checked'] ? 'toggle_on' : 'toggle_off'}
    </span>
  </button>
);

const UnstyledThemeControls: FunctionComponent<ThemeControlsProps> = (props) => {
  const { color, garden, setColor, setGarden, theme } = useContext(ThemeContext);

  const themeIcon = <span aria-hidden className="material-symbols-outlined">{theme.icon}</span>;
  const splitter = garden ? themeIcon : <span aria-hidden>|</span>;

  return (
    <div {...props}>
      <div className="name">
        <h1><strong>Emmi Russo</strong></h1>
        <div className="name__links-container">
          <a href="mailto:emmi@emmi.dev">emmi@emmi.dev</a>
          {splitter}
          Denver, CO
          {splitter}
          <a href="https://cdn.brandfolder.io/Z32ZS9WJ/at/4g7xcj59g59h5f3rv3zwpt6/Emmi_Russo_CV_2023.pdf">CV</a>
        </div>
      </div>
      <div className="theme-controls" role="group" aria-labelledby="id-group-label">
        <h2 className="sr-only" id="id-group-label">Theme</h2>
        <ThemeSwitch
          aria-checked={color === 'dark'}
          label={'dark mode'}
          onClick={(): void => setColor((prevColor) => prevColor === 'light' ? 'dark' : 'light')}
        />
        <ThemeSwitch
          aria-checked={garden}
          label={'garden mode'}
          onClick={(): void => setGarden((prevGarden) => !prevGarden)}
        />
      </div>
    </div>
  );
};

const StyledThemeControls = styled(UnstyledThemeControls)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  // vary max-width on screen size - bigger for smaller screens, 60% for desktop
  max-width: 60%;

  .name {
    h1 {
      font-size: 3em;
      margin-bottom: 0;
      text-transform: lowercase;
    }

    &__links-container {
      align-items: center;
      display: flex;
      gap: 10px;
      text-transform: lowercase;
    }
  }

  .theme-controls {
    border: 5px dashed ${props => props.theme.iconColor};
    display: flex;
    flex-direction: column;
    padding: 20px;

    &__switch {
      align-items: center;
      display: flex;
      gap: 5px;
      justify-content: space-between;
      width: 100%:
    }
  }
`;

export const ThemeControls: FunctionComponent<ThemeControlsProps> = (props) => (
  <StyledThemeControls {...props} />
);
