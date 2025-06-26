import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ThemeControls } from './theme-controls';
import { SectionsContainer } from './sections-container';
// import { balancedLatinSquares } from './research-utils/balanced-latin-squares';

interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

const UnstyledBody: FunctionComponent<BodyProps> = (props) => {
  // useEffect(() => {
  //   balancedLatinSquares(16);
  // }, []);

  return (
    <div {...props}>
      <ThemeControls />
      <SectionsContainer />
    </div>
  );
};

const StyledBody = styled(UnstyledBody)`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  height: 100%;
  min-height: 100vh;
  padding-bottom: 20px;

  a {
    color: ${props => props.theme.linkColor}
  }

  .theme-controls__switch {
    color: ${props => props.theme.color};
  }

  .mobile-hidden {
    display: none;
  }

  @media(min-width: 430px) {
    .mobile-hidden {
      display: block;
    }

    .desktop-hidden {
      display: none;
    }
  }

  .material-symbols-outlined {
    &--filled {
      font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }
  }
`;

export const Body: FunctionComponent<BodyProps> = (props) => (
  <StyledBody {...props} />
);
