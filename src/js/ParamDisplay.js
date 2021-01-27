/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function ParamDisplay(props) {
  // CSS-in-JS Styling
  const rangeStyling = css`
    input[type='range'] {
      width: 100%;
      margin: 3.95px 0;
      background-color: transparent;
      -webkit-appearance: none;
    }

    input[type='range']:focus {
      outline: none;
    }

    input[type='range']::-webkit-slider-runnable-track {
      background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
      transition: background 0.5s ease-in-out;
      border: 0;
      border-radius: 25px;
      width: 100%;
      height: 8.1px;
      cursor: pointer;
    }

    input[type='range']::-webkit-slider-thumb {
      margin-top: -3.95px;
      width: 16px;
      height: 16px;
      background: #ffffff;
      border: 1px solid #000000;
      border-radius: 50px;
      cursor: pointer;
      -webkit-appearance: none;
    }

    input[type='range']:focus::-webkit-slider-runnable-track {
      background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
      transition: background 0.5s ease-in-out;
    }

    input[type='range']::-moz-range-track {
      background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
      transition: background 0.5s ease-in-out;
      border: 0;
      border-radius: 25px;
      width: 100%;
      height: 8.1px;
      cursor: pointer;
    }

    input[type='range']::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: #ffffff;
      border: 1px solid #000000;
      border-radius: 50px;
      cursor: pointer;
    }

    input[type='range']::-ms-track {
      background: transparent;
      border-color: transparent;
      border-width: 4.95px 0;
      color: transparent;
      width: 100%;
      height: 8.1px;
      cursor: pointer;
    }

    input[type='range']::-ms-fill-lower {
      background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
      transition: background 0.5s ease-in-out;
      border: 0;
      border-radius: 50px;
    }

    input[type='range']::-ms-fill-upper {
      background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
      transition: background 0.5s ease-in-out;
      border: 0;
      border-radius: 50px;
    }

    input[type='range']::-ms-thumb {
      width: 16px;
      height: 16px;
      background: #ffffff;
      border: 1px solid #000000;
      border-radius: 50px;
      cursor: pointer;
      margin-top: 0px;
    }

    input[type='range']:focus::-ms-fill-lower {
      background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
      transition: background 0.5s ease-in-out;
    }

    input[type='range']:focus::-ms-fill-upper {
      background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
      transition: background 0.5s ease-in-out;
    }
  `;

  const buttonStyling = css`
    background: hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%);
    color: ${props.textColor};
    transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
    border: none;
    text-align: center;
    padding: 1rem;
    font-weight: 600;
    border-radius: 1rem;
    font-size: 16px;
  `;

  return (
    <section id="sectionOne" css={rangeStyling}>
      <h1>Random Color Generator</h1>

      <div className="group">
        {/* User input for Hue */}
        <div className="box">
          <label htmlFor="hue">Hue in degrees</label>
          <input
            id="hue"
            type="range"
            min="0"
            max="360"
            value={props.hue}
            onChange={({ target }) => props.setHue(target.value)}
          />
          <input
            type="number"
            min="0"
            max="360"
            value={props.hue}
            onChange={({ target }) => props.setHue(target.value)}
          />
        </div>

        {/* User input for Saturation */}
        <div className="box">
          <label htmlFor="saturation">Saturation in percent</label>
          <input
            id="saturation"
            type="range"
            min="0"
            max="100"
            value={props.saturation}
            onChange={({ target }) => props.setSaturation(target.value)}
          />
          <input
            type="number"
            min="0"
            max="100"
            value={props.saturation}
            onChange={({ target }) => props.setSaturation(target.value)}
          />
        </div>

        {/* User input for Lightness */}
        <div className="box">
          <label htmlFor="lightness">Lightness in percent</label>
          <input
            id="lightness"
            type="range"
            min="0"
            max="100"
            value={props.lightness}
            onChange={({ target }) => props.setLightness(target.value)}
          />
          <input
            type="number"
            min="0"
            max="100"
            value={props.lightness}
            onChange={({ target }) => props.setLightness(target.value)}
          />
        </div>
      </div>
      <div className="group">
        {/* User input for Width */}
        <div className="box">
          <label htmlFor="width">Box-Width in pixels</label>
          <input
            id="width"
            type="number"
            min="0"
            max="1000"
            defaultValue={props.width}
            onChange={({ target }) => props.setWidth(target.value)}
          />
          <p>(maximum 1000px)</p>
        </div>

        {/* User input for height */}
        <div className="box">
          <label htmlFor="height">Box-Height in pixels</label>
          <input
            id="height"
            type="number"
            min="0"
            max="500"
            defaultValue={props.height}
            onChange={({ target }) => props.setHeight(target.value)}
          />
          <p>(maximum 500px)</p>
        </div>
      </div>

      {/* Button for generating a random color */}
      <button
        onClick={() => {
          props.setHue(Math.floor(Math.random() * 360));
          props.setSaturation(Math.floor(Math.random() * 100));
          props.setLightness(Math.floor(Math.random() * 100));
        }}
        css={buttonStyling}
      >
        Random Color
      </button>
    </section>
  );
}
