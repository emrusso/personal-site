import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled from "styled-components";

import { listStyles } from "../utilities/styles";
import { ListItem } from "../utilities/list-item";
import { ThemeContext } from "../theme-context";

interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {}

const researchQuestions = [
  "How do children conceptualize and experience autonomy? How can we design technology to enrich children's experiences of autonomy?",
  "How does shared family gaming offer opportunities for child-led play and discovery? How does game design influence these opportunities?",
  "How do monetization design patterns in free-to-play video games influence children's purchase choices?"
]

const UnstyledAboutMe: FunctionComponent<AboutMeProps> = (props) => {
  const { color, garden } = useContext(ThemeContext);
  const hasSymIcon = !(color === 'dark' && garden);
  const currentDate = new Date();
  const weddingDate = new Date('2026-09-12');
  const partnerTerm = currentDate > weddingDate ? 'husband' : 'fiancé';

  return (
    <div {...props} id="about-me">
      <div className="intro-container">
        <img alt="" src={`${process.env.PUBLIC_URL}/EmmiMaisie.png`} />
        <div>
          <p>
            I am a PhD candidate at the University of Washington's <a href="https://ischool.uw.edu/">Information School</a> and member of its <a href="https://userempowerment.org">User Empowerment Lab</a>, <a href="https://gamer.ischool.uw.edu/">GAMER Group</a>, and <a href="https://digitalyouth.uw.edu/">Center for Digital Youth</a>.
          </p>
          <p>
            I study how the design of digital technology presents both risks and opportunities for children's autonomy. I am particularly passionate about studying young children's digital gaming practices through playful, child-led design and research methods.
          </p>
        </div>
      </div>
      <p>
        My current research examines the following questions:
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
      </p>
      <p>
        Prior to pursuing my PhD, I worked as a full-stack software developer at Microsoft and Smartsheet. In my free time I like to play video games, watch skateboarding competitions with my {partnerTerm}, and pester our dog, Maisie.
      </p>
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
