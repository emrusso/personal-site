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
      We captured our learnings in a <a href="https://brandfolder.engineering/useContext-performance-issue">blog post</a> and partnered with an application monitoring platform to present a webinar about our learnings.
    </span>
  );
  const cldDescription = "Recording of a brief outline of a game created in a few weeks as a final project for UChicago's Autumn 2017 Computers for Learning course. Implemented on a custom Java-based game engine that was used for the class. Our design was to use scaffolded, scaling levels to support preschoolers in developing sequecing skills."
  const cheerDescription = (
    <span>
      I was a cheerleader for the University of Chicago my entire undergraduate career.
      In 2017, I rebuilt the <a href="https://cheerleading.uchicago.edu">team's website</a> in AngularJS.
      I recently revisited it to make a few tweaks, revise the mobile experience, and support the current team in updating the information.
    </span>
  );
  const thisSiteDescription = (
    <div>
      This site is a React app built with Create React App with SCSS and TypeScript and hosted via Firebase.
      My main goals for this iteration of the site were to
        <ul className="mobile-hidden">
          <ListItem>
            <span>move away from GitHub pages to hosting with Firebase and deploying with GitHub actions</span>
          </ListItem>
          <ListItem>
            <span>fully adhere to the Web Consortium Accessibility Guidelines</span>
          </ListItem>
          <ListItem>
            <span>explore styled components and theming</span>
          </ListItem>
        </ul>
    </div>
  );

  return (
    <div {...props} id="my-work">
      <WorkCard title="Webinar: Diagnosing React Performance Issues" description={webinarDescription}>
        <iframe
          allowFullScreen
          className="mobile-hidden"
          width="400"
          height="225"
          src="https://www.youtube.com/embed/uFgdC3ilx54?si=wqpOxqTE79-Axkvw&amp;start=1307"
          title="React Context Performance Webinar"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <iframe
          allowFullScreen
          className="desktop-hidden"
          width="270"
          height="152"
          src="https://www.youtube.com/embed/uFgdC3ilx54?si=wqpOxqTE79-Axkvw&amp;start=1307"
          title="React Context Performance Webinar"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </WorkCard>
      <WorkCard title="Computers for Learning Game MVP" description={cldDescription}>
        <iframe
          allowFullScreen
          className="mobile-hidden"
          width="400"
          height="225"
          src="https://www.youtube.com/embed/7l9c4nomrGw?si=BhKKXyrqTYuz8Ar-"
          title="Computers for Learning Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <iframe
          allowFullScreen
          className="desktop-hidden"
          width="270"
          height="152"
          src="https://www.youtube.com/embed/7l9c4nomrGw?si=BhKKXyrqTYuz8Ar-"
          title="Computers for Learning Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </WorkCard>
      <WorkCard flexContent title="cheerleading.uchicago.edu" description={cheerDescription}>
        <img
          alt="screen capture of desktop view of cheerleading website"
          id="cheer-desktop"
          src={`${process.env.PUBLIC_URL}/CheerDesktop.png`}
        />
        <img
          alt="screen capture of mobile view of cheerleading website"
          id="cheer-mobile"
          src={`${process.env.PUBLIC_URL}/CheerMobile.png`}
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

  justify-content: center;
  gap: 26px;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;

  ul {
    ${listStyles}
  }

  @media only screen and (min-width: 2560px) {
    justify-content: flex-start;
    gap: 50px;
  }

  @media only screen and (min-width: 1280px) and (max-width: 2559px) {
    justify-content: space-evenly;
  }

  iframe, img {
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
      left: 54px;
      top: 31px;
      color: ${props => props.theme.iconColor};

      @media(min-width: 430px) {
        left: 129px;
        top: auto;
      }
    }

    &__top {
      font-size: 6em;
      left: 102px;
      top: 66px;
      animation: rotate 5s linear infinite;

      @media(prefers-reduced-motion) {
        animation: none;
      }

      @media(min-width: 430px) {
        left: 177px;
        top: 96px;
      }
    }
  }

  #cheer-desktop {
    width: 200px;

    @media(min-width: 430px) {
      width: 300px;
    }
  }

  #cheer-mobile {
    height: 100px;
    margin-top: 44px;
    margin-left: -32px;

    @media(min-width: 430px) {
      height: 150px;
    }
  }
`;

export const MyWork: FunctionComponent<MyWorkProps> = (props) => (
  <StyledMyWork {...props} />
);
