/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function ParamDisplay() {
  const paramStyle = css`
    grid-area: 2 / 2;
  `;

  return <div css={paramStyle}>Param</div>;
}
