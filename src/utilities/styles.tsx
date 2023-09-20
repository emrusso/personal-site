import { css } from 'styled-components';

export const listStyles = css`
  list-style: none;
  padding-inline-start: 0;
  line-height: 1.2em;
`;

export const rotate = css`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(180deg);
    }
  }
`
