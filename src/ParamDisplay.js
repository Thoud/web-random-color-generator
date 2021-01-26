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
      <div>
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
      <div>
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
      <div>
        <label htmlFor="width">Box-Width in pixels</label>
        <input
          id="width"
          type="number"
          defaultValue={props.width}
          onChange={({ target }) => props.setWidth(target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Box-Height in pixels</label>
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
