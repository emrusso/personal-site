import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface TechnicalSkillsProps extends HTMLAttributes<HTMLDivElement> {
  entries: string[]
  type: string;
}

const UnstyledTechnicalSkills: FunctionComponent<TechnicalSkillsProps> = ({ entries, type, ...props }) => {
  const id = `tech-skills-order--${type}`;
  return (
    <div {...props}>
      <div aria-hidden className="technical-skills__expertise-bar">
      <span className="sr-only" id={id}>Ordered by decreasing level of expertise</span>
      </div>
      <ul aria-describedby={id} className={`${type} no-list-styling technical-skills--mono`}>
        {entries.map((entry) => (
          <li key={`${type}-entry-${entry}`}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

const StyledTechnicalSkills = styled(UnstyledTechnicalSkills)`
  display: flex;

  ul {
    padding-inline-start: 10px;

    li {
      padding: 5px 0;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0
      }
    }
  }

  .technical-skills__expertise-bar {
    width: 10px;
    border-radius: 4px;
    background: linear-gradient(to bottom, ${props => props.theme.gradientBottomColor} 0%, ${props => props.theme.gradientTopColor} 100%);
  }
`;

export const TechnicalSkills: FunctionComponent<TechnicalSkillsProps> = (props) => (
  <StyledTechnicalSkills {...props} />
);
