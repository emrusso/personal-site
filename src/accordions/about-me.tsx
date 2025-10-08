import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled from "styled-components";

import { listStyles } from "../utilities/styles";
import { ListItem } from "../utilities/list-item";
import { ThemeContext } from "../theme-context";

interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {}

const researchQuestions = [
  "How do existing technology designs help or hinder interpersonal relationship well-being?",
  "How do we design engaging, playful technology without leveraging manipulative design tactics?",
  "How do we design games and technology for children to support their tendency to develop knowledge through play?"
]

const UnstyledAboutMe: FunctionComponent<AboutMeProps> = (props) => {
  const { color, garden } = useContext(ThemeContext);
  const hasSymIcon = !(color === 'dark' && garden);

  return (
    <div {...props} id="about-me">
      <div className="intro-container">
        <img alt="" src={`${process.env.PUBLIC_URL}/EmmiMaisie.png`} />
        <div>
          <p>
            I am a PhD student at the University of Washington's <a href="https://ischool.uw.edu/">Information School</a> and member of its <a href="https://userempowerment.org">User Empowerment Lab</a>, <a href="https://gamer.ischool.uw.edu/">GAMER Group</a>, and <a href="https://digitalyouth.uw.edu/">Center for Digital Youth</a>.
            
            Prior to my PhD studies, I worked as a full-stack software engineer at Google, Square, Microsoft, and Smartsheet.
          </p>
          <p>In my free time I like to play video games, listen to podcasts about anything and everything, and pester my Corgi, Maisie.</p>
        </div>
      </div>
      <p>
        I study how technology, especially video games, can be designed to support play, interpersonal relationships, and well-being. I'm particularly interested in preschool children's technology use and how we might design developmentally-appropriate technology for young children that supports self-directed play.

        My research is guided by questions like the following:
      </p>
      <ul>
        {researchQuestions.map((question, i) => {
          const bulletId = `research-question-${i}`;
          return (
            <ListItem key={bulletId} bulletId={bulletId} >
              <span
                className="research-question"
                onMouseEnter={(): void => {
                  if (hasSymIcon) {
                    document.getElementById(bulletId)?.classList.add('spin');
                  }
                }}
                onMouseLeave={(): void => { document.getElementById(bulletId)?.classList.remove('spin'); }}
              >
                {question}
              </span>
            </ListItem>
          );
        })}
      </ul>
    </div>
);
};

const StyledAboutMe = styled(UnstyledAboutMe)`
  font-size: 1.2em;
  line-height: 1.4em;
  margin: 20px;

  .intro-container {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media(min-width: 430px) {
      flex-direction: row;
      gap: 26px;
    }

    img {
      height: 200px;
    }
  }

  ul {
    ${listStyles}
  }

  @media(hover: hover) {
    .research-question:hover {
      animation: embolden 3s both;

      @media(prefers-reduced-motion) {
        animation: none;
      }
    }
  }

  @keyframes embolden {
    0% {
      font-weight: 500;
    }

    50% {
      font-weight: 600;
    }

    100% {
      font-weight: 700;
    }
  }
`;

export const AboutMe: FunctionComponent<AboutMeProps> = (props) => (
  <StyledAboutMe {...props} />
);
