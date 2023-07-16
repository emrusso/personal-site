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
  const { color, garden, setColor, setGarden } = useContext(ThemeContext);

  return (
    <div {...props}>
      <div className="name">
        <h1><strong>Emmi Russo</strong></h1>
        <div className="name__links-container">
          <a href="mailto:emmi@emmi.dev">emmi@emmi.dev</a>
          |
          <a href="%PUBLIC_URL%/Emmi_Russo_Technical_Resume_2023.pdf">PDF Resume</a>
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
  max-width: 1000px;

  .name {
    h1 {
      font-size: 3em;
      margin-bottom: 0;
      text-transform: lowercase;
    }

    &__links-container {
      display: flex;
      gap: 15px;

      a {
        color: ${props => props.theme.linkColor}
      }
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
