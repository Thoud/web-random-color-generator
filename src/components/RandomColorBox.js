/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function RandomColorBox(props) {
  // CSS-in-JS Styling
  const colorBoxGeneralStyle = css`
    background-color: ${props.backgroundColor};
    width: ${props.width}px;
    max-width: 1000px;
    height: ${props.height}px;
    max-height: 500px;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const contrastingTextColor = css`
    color: ${props.textColor};
    transition: color 0.5s ease-in-out;
  `;

  return (
    <section id="sectionTwo">
      {/* Colored box */}
      <div css={colorBoxGeneralStyle}>
        {/* Displaying the hex value of the background color */}
        <h2 css={contrastingTextColor}>{props.backgroundColor}</h2>
      </div>
    </section>
  );
}
