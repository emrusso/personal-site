import { FunctionComponent, HTMLAttributes, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionProps, Section } from './section';
import { AboutMe } from './accordions/about-me';
import { MyWork } from './accordions/my-work/my-work';

interface SectionsContainerProps extends HTMLAttributes<HTMLDivElement> {}

const UnstyledSectionsContainer: FunctionComponent<SectionsContainerProps> = ({ className }) => {
  const accordions: Accordion[] = ['about-me', 'my-work'];
  const [accordionsOpen, setAccordionsOpen] = useState<Record<Accordion, boolean>>({
    'about-me': true,
    'my-work': true
  });

  const accordionContentMap: Record<Accordion, AccordionProps> = useMemo(() => ({
    'about-me': {
      children: <AboutMe />,
      id: 'about-me',
      title: 'About Me'
    },
    'my-work': {
      children: <MyWork />,
      id: 'my-work',
      title: 'My Work'
    }
  }), []);

  return (
    <div className={`section ${className}`}>
      {accordions.map((accordion) => (
        <Section
          key={accordion}
          accordion={accordion}
          accordionContent={accordionContentMap[accordion]}
          accordionsOpen={accordionsOpen}
          setAccordionsOpen={setAccordionsOpen}
        />
      ))}
    </div>
  );
}

const StyledSectionsContainer = styled(UnstyledSectionsContainer)`
  margin: auto;
  max-width: 60%;
`;

export const SectionsContainer: FunctionComponent<SectionsContainerProps> = (props) => (
  <StyledSectionsContainer {...props} />
);
