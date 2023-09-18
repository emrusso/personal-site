import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ThemeControls } from './theme-controls';
import { SectionsContainer } from './sections-container';

interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

const UnstyledBody: FunctionComponent<BodyProps> = (props) => {
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
`;

export const Body: FunctionComponent<BodyProps> = (props) => (
  <StyledBody {...props} />
);
