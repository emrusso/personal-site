import { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';

import { ResumeEntry } from './ResumeEntry';
import { ThemeContext } from './theme-context';

interface ExperiencesProps extends HTMLAttributes<HTMLUListElement> {
  experiences: ResumeEntry[];
}

const UnstyledExperiences: FunctionComponent<ExperiencesProps> = ({ className, experiences, ...props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className={`no-list-styling ${className}`} {...props} >
      {experiences.map(({ company, location, positions, bullets }) => (
        <li className="experience" key={`experience-${company}-${location}`}>
          <span className="experience__location">
            <strong>{company},</strong>&nbsp;
            {location}
          </span>
          <>
            {positions.map((position) => (
              <span className="experience__position" key={`position-${company}-${position.title}`}>
                <em className="experience__position--title">{position.title}</em>
                {position.startDate && (
                  <>
                    {position.startDate}&nbsp;&#8211;&nbsp;{position.endDate}
                  </>
                )}
              </span>
            ))}
          </>
          <ul className="experience__bullets no-list-styling">
            {bullets.map((bullet, i) => (
              <li key={`experience-bullet-${company}-${location}-${i}`}>
                <span className="experience__bullets__item">
                  <span aria-hidden className="material-symbols-outlined">{theme.icon}</span>
                  <span>{bullet}</span>
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const StyledExperiences = styled(UnstyledExperiences)`
  .experience {
    &__location {
      display: block;
      margin-bottom: 5px;
    }

    &__position {
      display: flex;
      justify-content: space-between;

      &--title {
        background-color: ${props => props.theme.highlightColor};
        padding: 10px;
      }
    }

    &__bullets {
      padding-inline-start: 10px;

      &__item {
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
        }
      }
    }
  }

  .material-symbols-outlined {
    color: ${props => props.theme.iconColor};
  }
`;

export const Experiences: FunctionComponent<ExperiencesProps> = (props) => (
  <StyledExperiences {...props} />
);
