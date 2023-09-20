import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { listStyles, rotate } from '../../utilities/styles';
import { ListItem } from '../../utilities/list-item';
import { WorkCard } from './work-card';

// type Work = 'webinar' |  'cflDemo' | 'typescript';

interface MyWorkProps extends HTMLAttributes<HTMLDivElement> {}

const UnstyledMyWork: FunctionComponent<MyWorkProps> = (props) => {
  const webinarDescription = (
    <span>
      A coworker and I made some goofy mistakes when we used React's Context API for the first time.
      We captured our learnings in a <a href="https://brandfolder.engineering/useContext-performance-issue">blog post</a> and partnered with a application monitoring platform to present a webinar about our learnings.
    </span>
  );
  const cldDescription = "Recording of a brief outline of a game created in a few weeks as a final project for UChicago's Autumn 2017 Computers for Learning course. Implemented on a custom Java-based game engine that was used for the class. Our design was to use scaffolded, scaling levels to support preschoolers in developing sequecing skills."
  const tsDescription = "One of the pieces of software engineering I find most rewarding is helping others learn and develop skills. Here are two presentations I've given multiple times to help onboard team members to the TypeScript programming language."
  const thisSiteDescription = (
    <div>
      This site is a React app built with Create React App with SCSS and TypeScript and hosted via Firebase.
      My main goals for this iteration of the site were to
        <ul>
          <ListItem>
            <span>move away from GitHub pages to hosting with Firebase and deploying with GitHub actions</span>
          </ListItem>
          <ListItem>
            <span>adhere 100% to the Web Consortium Accessibility Guidelines</span>
          </ListItem>
          <ListItem>
            <span>explore styled components and theming</span>
          </ListItem>
        </ul>
    </div>
  );

  return (
    <div {...props}>
      <WorkCard title="Webinar: Diagnosing React Performance Issues" description={webinarDescription}>
        <iframe
          allowFullScreen
          width="400"
          height="225"
          src="https://www.youtube.com/embed/uFgdC3ilx54?si=__Sfu5IMdAIvw0XH"
          title="React Context Performance Webinar"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </WorkCard>
      <WorkCard title="Computers for Learning Game Demo" description={cldDescription}>
        <iframe
          allowFullScreen
          width="400"
          height="225"
          src="https://www.youtube.com/embed/7l9c4nomrGw?si=BhKKXyrqTYuz8Ar-"
          title="Computers for Learning Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </WorkCard>
      <WorkCard title="TypeScript Teachouts" description={tsDescription}>
        <iframe
          src="https://drive.google.com/file/d/1cqqjScMFduuFBb-67KmtUkv-ugw4xei1/preview"
          width="400"
          height="225"
          allow="autoplay"
          title="TypeScript for Beginners"
        />
        <iframe
          src="https://drive.google.com/file/d/18TSLFH5O2mJo7ViCsFaIahzMIAPvschH/preview"
          width="400"
          height="225"
          allow="autoplay"
          title="Intermediate TypeScript"
        />
      </WorkCard>
      <WorkCard absoluteDescription title="emmi.dev" description={thisSiteDescription}>
        <div className="icon__container">
          <span aria-hidden className="icon__top material-symbols-outlined">filter_vintage</span>
          <span aria-hidden className="icon__base material-symbols-outlined">laptop</span>
        </div>
      </WorkCard>
    </div>
  );
};

const StyledMyWork = styled(UnstyledMyWork)`
  ${rotate}

  display: flex;
  max-width: 100%;
  flex-wrap: wrap;

  ul {
    ${listStyles}
  }

  @media only screen and (max-width: 3600px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 3601px) {
    gap: 50px;
  }

  @media only screen and (max-width: 600px) {

  }

  iframe {
    border: 0;
    border-radius: 6px;
    box-shadow: 0 6px 6px rgba(0,0,0,0.2);
  }

  .icon {
    &__base, &__top {
      position: absolute;
      color: ${props => props.theme.color}
    }

    &__base {
      font-size: 12em;
      left: 129px;
      color: ${props => props.theme.iconColor};
    }

    &__top {
      font-size: 6em;
      left: 177px;
      top: 96px;
      animation: rotate 5s linear infinite;
    }
  }
`;

export const MyWork: FunctionComponent<MyWorkProps> = (props) => (
  <StyledMyWork {...props} />
);
