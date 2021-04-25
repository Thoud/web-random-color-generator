/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS-in-JS Styling
const colorBoxGeneralStyle = (backgroundColor, width, height) => {
  return css`
    background-color: ${backgroundColor};
    width: ${width}px;
    max-width: 1000px;
    height: ${height}px;
    max-height: 500px;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

const contrastingTextColor = (textColor) => {
  return css`
    color: ${textColor};
    transition: color 0.5s ease-in-out;
  `;
};

export default function RandomColorBox(props) {
  return (
    <section id="sectionTwo">
      {/* Colored box */}
      <div
        css={colorBoxGeneralStyle(
          props.backgroundColor,
          props.width,
          props.height,
        )}
      >
        {/* Display the hex value of the background color */}
        <h2 css={contrastingTextColor(props.textColor)}>
          {props.backgroundColor}
        </h2>
      </div>
    </section>
  );
}
