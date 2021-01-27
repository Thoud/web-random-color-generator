/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function RandomColorBox(props) {
  // CSS-in-JS Styling
  const colorBoxStyle = css`
    grid-area: 3 / 2;
    background-color: ${props.color};
    width: ${props.width}px;
    max-width: 1000px;
    height: ${props.height}px;
    max-height: 500px;
    transition: all 1s ease-in-out;
  `;

  return (
    <div css={colorBoxStyle}>
      {/* Displaying the hex value of the background color */}
      <h2>{props.color}</h2>
    </div>
  );
}
