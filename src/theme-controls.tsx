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
    className="theme-controls__switch mobile-hidden"
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

interface MobileThemeSwitchProps extends ThemeSwitchProps {
  icon: string;
}

const MobileThemeSwitch: FunctionComponent<MobileThemeSwitchProps> = ({ icon, label, ...props }) => (
  <button
    aria-checked={props['aria-checked']}
    className="theme-controls__switch desktop-hidden"
    type="button"
    role="switch"
    {...props}
  >
    <span className="sr-only">{label}</span>
    <span aria-hidden className={`material-symbols-outlined${props['aria-checked'] ? ' material-symbols-outlined--filled' : ''}`}>
      {icon}
    </span>
  </button>
);

const UnstyledThemeControls: FunctionComponent<ThemeControlsProps> = (props) => {
  const { color, garden, setColor, setGarden, theme } = useContext(ThemeContext);

  const themeIcon = <span aria-hidden className="material-symbols-outlined mobile-hidden">{theme.icon}</span>;
  const splitter = garden ? themeIcon : <span aria-hidden className="mobile-hidden">|</span>;

  const darkProps: ThemeSwitchProps = {
    'aria-checked': color === 'dark',
    label: 'dark mode',
    onClick: (): void => setColor((prevColor) => prevColor === 'light' ? 'dark' : 'light')
  };
  const gardenProps: ThemeSwitchProps = {
    'aria-checked': garden,
    label: 'garden mode',
    onClick: (): void => setGarden((prevGarden) => !prevGarden)
  }

  return (
    <div {...props}>
      <div className="name">
        <h1><strong>Emmi Russo</strong></h1>
        <div className="name__links-container">
          <a href="mailto:emmi@emmi.dev" rel="noopener noreferrer">emmi@emmi.dev</a>
          {splitter}
          Seattle, WA
          {splitter}
          <a href={`${process.env.PUBLIC_URL}/Emmi_Russo_CV_2024.pdf`} rel="noopener noreferrer">CV</a>
        </div>
      </div>
      <div className="theme-controls" role="group" aria-labelledby="id-group-label">
        <h2 className="sr-only" id="id-group-label">Theme</h2>
        <ThemeSwitch
          {...darkProps}
        />
        <ThemeSwitch
          {...gardenProps}
        />
        <MobileThemeSwitch
          {...darkProps}
          icon="dark_mode"
        />
        <MobileThemeSwitch
          {...gardenProps}
          icon="deceased"
        />
      </div>
    </div>
  );
};

const StyledThemeControls = styled(UnstyledThemeControls)`
  display: flex;
  margin: auto;
  padding: 26px;
  justify-content: space-between;
  flex-direction: row;
  width: calc(100vw - 52px);
  align-items: center;

  @media(min-width: 430px) {
    max-width: 90%;
  }

  @media(min-width: 1280px) {
    max-width: 70%;
  }

  @media(min-width: 2560px) {
    max-width: 60%;
  }

  .name {
    h1 {
      font-size: 3em;
      margin-bottom: 0;
      text-transform: lowercase;
    }

    &__links-container {
      display: flex;
      flex-direction: column;
      text-transform: lowercase;

      @media(min-width: 430px) {
        align-items: center;
        flex-direction: row;
        gap: 10px;
      }
    }
  }

  .theme-controls {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .material-symbols-outlined {
      font-size: 3em;
    }

    @media(min-width: 430px) {
      border: 5px dashed ${props => props.theme.iconColor};
      padding: 20px;

      .material-symbols-outlined {
        font-size: 1em;
      }

      &__switch {
        &.mobile-hidden {
          display: flex;
        }

        align-items: center;
        display: flex;
        gap: 5px;
        justify-content: space-between;
        width: 100%:
      }
    }
  }
`;

export const ThemeControls: FunctionComponent<ThemeControlsProps> = (props) => (
  <StyledThemeControls {...props} />
);
