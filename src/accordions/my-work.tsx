import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

// type Work = 'webinar' |  'cflDemo' | 'typescript';

interface WorkCardProps {
  title: string;
  description: ReactNode;
  children: ReactNode;
}

const WorkCard: FunctionComponent<WorkCardProps> = ({ children, description, title }) => (
  <div className="work-card__container">
    <div className="work-card__edge work-card__edge--top" />
    <div className="work-card">
      <h3 className="work-card__title"><em>{title}</em></h3>
      <div className="work-card__content">{children}</div>
      <div className="work-card__description">{description}</div>
    </div>
    <div className="work-card__edge work-card__edge--bottom-right" />
    <div className="work-card__edge work-card__edge--bottom-left" />
    <div className="work-card__side" />
    <div className="work-card__bottom" />
  </div>
);

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
  const thisSiteDescription = "This site is a React app built with Create React App with SCSS and TypeScript and hosted via Firebase. My main goals for this iteration of the site were to move away from GitHub pages to hosting with Firebase and deploying with GitHub actions, adhering 100% to the Web Consortium Accessibility Guidelines, and exploring styled components and theming."
  return (
    <div {...props}>
      <WorkCard title="Webinar: Diagnosing React Performance Issues" description={webinarDescription}>
        <iframe
          allowFullScreen
          width="400"
          height="225"
          src="https://www.youtube.com/embed/uFgdC3ilx54?si=__Sfu5IMdAIvw0XH"
          title="React Context Performance Webinar"
          frameBorder="0"
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
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </WorkCard>
      <WorkCard title="TypeScript Teachouts" description={tsDescription}>
        <iframe src="https://drive.google.com/file/d/1cqqjScMFduuFBb-67KmtUkv-ugw4xei1/preview" width="400" height="225" allow="autoplay" />
        <iframe src="https://drive.google.com/file/d/18TSLFH5O2mJo7ViCsFaIahzMIAPvschH/preview" width="400" height="225" allow="autoplay" />
      </WorkCard>
      <WorkCard title="emmi.dev" description={thisSiteDescription}>
        <div className="icon__container">
          <span aria-hidden className="icon__top material-symbols-outlined">filter_vintage</span>
          <span aria-hidden className="icon__base material-symbols-outlined">laptop</span>
        </div>
      </WorkCard>
    </div>
  );
};

const StyledMyWork = styled(UnstyledMyWork)`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 3600px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 3601px) {
    gap: 50px;
  }

  @media only screen and (max-width: 600px) {

  }

  .work-card {
    align-items: center;
    border: 1px solid ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100%;
    box-shadow: 6px 6px 2px 1px ${props => props.theme.highlightColor};

    .material-symbols-outlined {
      color: ${props => props.theme.iconColor}
    }

    .icon {
      &__container {
        position: relative;
      }

      &__base, &__top {
        position: absolute;
      }

      &__base {
        font-size: 10em;
      }

      &__top {
        font-size: 6em;
      }
    }

    &__content {
      margin-top: 50px;
    }

    &__description {
      margin: 25px;
    }

    &__container {
      margin-right: 25px;
      margin-bottom: 50px;
      width: 450px;
      min-width: 450px;
      height: 500px;
      position: relative;
    }

    &__title {
      background-color: ${props => props.theme.highlightColor};
      padding: 10px;
      width: fit-content;
      position: absolute;
      top: -32px;
      left: -25px;
    }

    &__side {
      height: 500px;
      width: 1px;
      position: absolute;
      left: 456px;
      top: 17px;
      border-right: 1px solid ${props => props.theme.color};
    }

    &__bottom {
      height: 1px;
      width: 450px;
      position: absolute;
      border-bottom: 1px solid ${props => props.theme.color};
      bottom: -20px;
      left: 6px;
    }

    &__edge {
      position: relative;
      border-right: 3px solid ${props => props.theme.color};
      width: 1px;
      height: 10px;
      transform: rotateY(50deg) rotateX(40deg);

      &--top {
        position: relative;
        top: 9px;
      }

      &--top, &--bottom-right {
        left: 452px;
      }

      &--bottom-right {
        top: -2px;
      }

      &--bottom-left {
        top: -12px;
        left: 1px;
      }
    }
  }
`;

export const MyWork: FunctionComponent<MyWorkProps> = (props) => (
  <StyledMyWork {...props} />
);
