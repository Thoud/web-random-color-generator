/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function ParamDisplay(props) {
  const paramStyle = css`
    grid-area: 2 / 2;
  `;

  return (
    <div css={paramStyle}>
      <h1>Random Color Generator</h1>
      <div>
        <label htmlFor="hue">Hue</label>
        <input
          id="hue"
          type="range"
          min="0"
          max="360"
          defaultValue={props.hue}
          onChange={({ target }) => props.setHue(target.value)}
        />
        <p>{props.hue}°</p>
      </div>
      <div>
        <label htmlFor="saturation">Saturation</label>
        <input
          id="saturation"
          type="range"
          min="0"
          max="100"
          defaultValue={props.saturation}
          onChange={({ target }) => props.setSaturation(target.value)}
        />
        <p>{props.saturation} %</p>
      </div>
      <div>
        <label htmlFor="lightness">Lightness</label>
        <input
          id="lightness"
          type="range"
          min="0"
          max="100"
          defaultValue={props.lightness}
          onChange={({ target }) => props.setLightness(target.value)}
        />
        <p>{props.lightness} %</p>
      </div>
      <div>
        <label htmlFor="width">Box-Width</label>
        <input
          id="width"
          type="number"
          defaultValue={props.width}
          onChange={({ target }) => props.setWidth(target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Box-Height</label>
        <input
          id="height"
          type="number"
          defaultValue={props.height}
          onChange={({ target }) => props.setHeight(target.value)}
        />
      </div>
      <button>Change Settings</button>
      <button>Random Color</button>
    </div>
  );
}
