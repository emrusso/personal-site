import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import { ThemeContext } from "../theme-context";
import styled from "styled-components";
import { rotate } from "./styles";

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  bulletId?: string;
}

const UnstyledListItem: FunctionComponent<ListItemProps> = ({ bulletId, children, ...otherProps }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li {...otherProps}>
      <span>
        <span aria-hidden id={bulletId} className="material-symbols-outlined">{theme?.icon}</span>
        {children}
      </span>
    </li>
  );
};

const StyledListItem = styled(UnstyledListItem)`
  ${rotate}

  > span {
    align-items: center;
    display: flex;
    gap: 25px;
    margin: 5px 0;
    padding-bottom: 10px;

    .material-symbols-outlined {
      cursor: default;
      user-select: none;
      color: ${props => props.theme.iconColor};

      &.spin {
        animation: rotate 1s linear 1;

        @media(prefers-reduced-motion) {
          animation: none;
        }
      }
    }
  }
`;

export const ListItem: FunctionComponent<ListItemProps> = (props) => (
  <StyledListItem {...props} />
);

