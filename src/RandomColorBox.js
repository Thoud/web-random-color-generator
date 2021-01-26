/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function RandomColorBox(props) {
  // CSS-in-JS Styling
  const colorBoxStyle = css`
    grid-area: 3 / 2;
    background-color: ${props.color};
    width: ${props.width}px;
    height: ${props.height}px;
  `;

  return (
    <div css={colorBoxStyle}>
      {/* Displaying the hex value of the background color */}
      <h2>{props.color}</h2>
    </div>
  );
}
