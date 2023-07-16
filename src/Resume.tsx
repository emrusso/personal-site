import { FunctionComponent, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Accordion, ResumeSection } from './ResumeSection';

interface ResumeProps extends HTMLAttributes<HTMLDivElement> {}

const UnstyledResume: FunctionComponent<ResumeProps> = ({ className }) => {
  const [accordions, setAccordions] = useState<Record<Accordion, boolean>>({
    education: true,
    fullTime: false,
    internships: false,
    research: true,
    summary: true,
    technicalSkills: true,
    researchInterests: true
  })

  return (
    <div className={`resume ${className}`}>
      {['summary', 'researchInterests', 'education', 'technicalSkills', 'research', 'fullTime', 'internships'].map((accordion) => (
        <ResumeSection
          key={accordion}
          accordion={accordion as Accordion}
          accordions={accordions}
          setAccordions={setAccordions}
        />
      ))}
    </div>
  );
}

const StyledResume = styled(UnstyledResume)`
  margin: auto;
  max-width: 1000px;

  .resume__heading {
    color: ${props => props.theme.iconColor};
    font-size: 2.5em;
    font-weight: normal;

    button {
      color: ${props => props.theme.iconColor};
      text-transform: lowercase;
      margin-left: -24px; // outdent caret to align headings with name
    }
  }
`;

export const Resume: FunctionComponent<ResumeProps> = (props) => (
  <StyledResume {...props} />
);
