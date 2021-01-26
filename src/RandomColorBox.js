/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function RandomColorBox() {
  const colorBoxStyle = css`
    grid-area: 3 / 2;
  `;

  return <div css={colorBoxStyle}></div>;
}
