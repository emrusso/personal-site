import { ReactNode, FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

interface WorkCardProps extends HTMLAttributes<HTMLDivElement> {
  description: ReactNode;
  title: string;
  absoluteDescription?: boolean;
  flexContent?: boolean;
}

const UnstyledWorkCard: FunctionComponent<WorkCardProps> = ({
  absoluteDescription = false,
  children,
  className,
  description,
  flexContent = false,
  title
}) => (
  <div className={`work-card__container ${className}`}>
    <div className="work-card__edge work-card__edge--top" />
    <div className="work-card">
      <h3 className="work-card__title"><em>{title}</em></h3>
      <div className={`work-card__content${flexContent ? ' work-card__content--flex' : ''}`}>{children}</div>
      <div className={`work-card__description${absoluteDescription ?  ' work-card__description--absolute' : ''}`}>
        {description}
      </div>
    </div>
    <div className="work-card__edge work-card__edge--bottom-right" />
    <div className="work-card__edge work-card__edge--bottom-left" />
    <div className="work-card__side" />
    <div className="work-card__bottom" />
  </div>
);

const StyledWorkCard = styled(UnstyledWorkCard)`
  width: 300px;
  min-width: 300px;
  height: 400px;
  margin-right: 25px;
  margin-bottom: 50px;
  position: relative;

  @media(min-width: 430px) {
    width: 450px;
    min-width: 450px;
    height: 500px;
  }

  .work-card {
    align-items: center;
    border: 1px solid ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 100%;
    box-shadow: 6px 6px 2px 1px ${props => props.theme.highlightColor};

    @media(min-width: 430px) {
      height: 500px;
    }

    &__content {
      margin-top: 50px;

      &--flex {
        align-items: flex-start;
        display: flex;
      }
    }

    &__description {
      margin: 25px;
      font-size: 0.85em;

      @media(min-width: 430px) {
        font-size: 1em;
      }

      &--absolute {
        position: absolute;
        top: 218px;

        @media(min-width: 430px) {
          top: 248px;
        }
      }
    }

    &__title {
      background-color: ${props => props.theme.highlightColor};
      padding: 10px;
      width: fit-content;
      position: absolute;
      top: -32px;

      @media(min-width: 430px) {
        left: -25px;
      }
    }

    &__side {
      height: 400px;
      width: 1px;
      position: absolute;
      top: 17px;
      left: 305px;
      border-right: 1px solid ${props => props.theme.color};

      @media(min-width: 430px) {
        height: 500px;
        left: 456px;
      }
    }

    &__bottom {
      height: 1px;
      width: 300px;
      position: absolute;
      border-bottom: 1px solid ${props => props.theme.color};
      bottom: -20px;
      left: 6px;

      @media(min-width: 430px) {
        width: 450px;
      }
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
        left: 302px;

        @media(min-width: 430px) {
          left: 452px;
        }
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

export const WorkCard: FunctionComponent<WorkCardProps> = (props) => (
  <StyledWorkCard {...props} />
);
