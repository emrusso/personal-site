import { Dispatch, FunctionComponent, HTMLAttributes, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';

export type Accordion = 'about-me' | 'my-work';

export interface AccordionProps {
  children: ReactNode;
  id: string;
  title: string;
}

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  accordion: Accordion;
  accordionContent: AccordionProps;
  accordionsOpen: Record<Accordion, boolean>;
  setAccordionsOpen: Dispatch<SetStateAction<Record<Accordion, boolean>>>;
}

const UnstyledSection: FunctionComponent<SectionProps> = ({ accordion, accordionContent, accordionsOpen, setAccordionsOpen, ...otherProps }) => {
  const { children, id, title } = accordionContent;

  return (
    <section {...otherProps}>
      <h2 className="section__heading">
        <button
          aria-controls={id}
          aria-expanded={accordionsOpen[accordion]}
          className="accordion-trigger"
          id={`${id}-accordion`}
          onClick={(): void => { setAccordionsOpen({ ...accordionsOpen, [accordion]: !accordionsOpen[accordion] }); }}
          type="button"
        >
          <span className="material-symbols-outlined">
            {accordionsOpen[accordion] ? 'expand_more' : 'navigate_next'}
          </span>
          {title}
        </button>
      </h2>
      {accordionsOpen[accordion] && children}
    </section>
  );
};

const StyledSection = styled(UnstyledSection)`
  .section__heading {
    color: ${props => props.theme.iconColor};
    font-size: 2.5em;
    font-weight: normal;
    margin: 25px 0;

    button {
      color: ${props => props.theme.iconColor};
      text-transform: lowercase;
      margin-left: -24px; // outdent caret to align headings with name
    }
  }
`;

export const Section: FunctionComponent<SectionProps> = (props) => (
  <StyledSection {...props} />
);
