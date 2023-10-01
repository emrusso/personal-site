import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled from "styled-components";

import { listStyles } from "../utilities/styles";
import { ListItem } from "../utilities/list-item";
import { ThemeContext } from "../theme-context";

interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {}

const researchQuestions = [
  "How can we ensure that the screen time preschoolers are likely to get is as positive as possible?",
  "Can we leverage broadly available mobile applications to support underserved populations?",
  "What are best practices when designing games and technology for children to support their tendency to uncover knowledge through play?"
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
            Emmi here! I've spent the last five years as a professional full-stack software engineer.
            I'm known on my team for thoughtful code reviews, strong empathy for users and teammates alike, and an attention to detail, with communication skills that keep everyone on the same page. In fact, I even won <a href="https://www.smartsheet.com/content-center/inside-smartsheet/company-news/meet-our-q1-brightspot-award-winners">an award</a> for it!
          </p>
          <p>In my free time I like to play video games, listen to podcasts about anything and everything, and pester my three-year-old Corgi, Maisie.</p>
        </div>
      </div>
      <p>
        I have an academic background in developmental cognitive psychology and computer science.
        I am interested in how children learn through structured and unstructured play and how that translates to play with machines, particularly in the context of video games and mobile applications.
        Not only is this fascinating to me academically, I feel that such research has the capacity to be deeply valuable to a society undergoing rapid growth in the availability of technology.
        I would like to have a strong understanding of the facets necessary to answers questions like the following:
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
