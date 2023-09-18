import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from '../theme-context';

interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {}

const researchQuestions = [
  "How can we ensure that the screen time preschoolers are likely to get is as positive as possible?",
  "Can we leverage broadly available mobile applications to support underserved populations?",
  "What are best practices when designing games and technology for children to support their tendency to uncover knowledge through play?"
]

const UnstyledAboutMe: FunctionComponent<AboutMeProps> = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div {...props}>
      <div>
        Emmi here! I've spent the last five years as a professional full-stack software engineer.
        I'm known on my team for thoughtful code reviews, strong empathy for users and teammates alike, and an attention to detail, with communication skills that keep everyone on the same page. In fact, I even won <a href="https://www.smartsheet.com/content-center/inside-smartsheet/company-news/meet-our-q1-brightspot-award-winners">an award</a> for it!
      </div>
      <div>
        I have an academic background in developmental cognitive psychology and computer science.
        I am interested in how children learn through structured and unstructured play and how that translates to play with machines, particularly in the context of video games and mobile applications.
        Not only is this fascinating to me academically, I feel that such research has the capacity to be deeply valuable to a society undergoing rapid growth in the availability of technology.
        I would like to have a strong understanding of the facets necessary to answers questions like the following:
        <ul>
          {researchQuestions.map((question) => (
            <li key={`research-question-${question.split(' ')[0]}`}>
              <span className="research-question">
                <span aria-hidden className="material-symbols-outlined">{theme?.icon}</span>
                <span>{question}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>In my free time I like to play video games, listen to podcasts about anything and everything, and pester my three-year-old Corgi, Maisie.</div>
    </div>
  );
};

const StyledAboutMe = styled(UnstyledAboutMe)`
  font-size: 1.2em;
  line-height: 1.4em;

  div {
    margin-bottom: 25px;
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
    line-height: 1.2em;

    .research-question {
      align-items: center;
      display: flex;
      gap: 25px;
      margin: 5px 0;
      padding-bottom: 10px;

      a {
        color: ${props => props.theme.linkColor}
      }

      .material-symbols-outlined {
        cursor: default;
        font-size: 17px;
        padding-top: 2px;
        user-select: none;
        color: ${props => props.theme.iconColor};
      }
    }
  }
`;

export const AboutMe: FunctionComponent<AboutMeProps> = (props) => (
  <StyledAboutMe {...props} />
);
