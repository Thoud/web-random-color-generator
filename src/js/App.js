import { useState } from 'react';
import RandomColorBox from './RandomColorBox';
import ParamDisplay from './ParamDisplay';

// Function for converting hsl to rgb
const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
};

// Function for converting rgb to hex
const rgbToHex = (rgbArray) => {
  let [r, g, b] = rgbArray;

  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1) r = '0' + r;
  if (g.length === 1) g = '0' + g;
  if (b.length === 1) b = '0' + b;

  return '#' + r + g + b;
};

// Function to decide between black and white text color according to the background color
const getContrast = (rgbArray) => {
  const [r, g, b] = rgbArray;

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? 'black' : 'white';
};

export default function App() {
  //States
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100));
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100));
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  // Converting the hsl input from the user to rgb
  const rgbColor = hslToRgb(hue, saturation, lightness);

  // Converting the rgb color to hex
  const backgroundColor = rgbToHex(rgbColor);

  // Deciding between black and white as text color
  const textColor = getContrast(rgbColor);

  return (
    <>
      <ParamDisplay
        hue={hue}
        setHue={setHue}
        saturation={saturation}
        setSaturation={setSaturation}
        lightness={lightness}
        setLightness={setLightness}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        textColor={textColor}
      />
      <RandomColorBox
        backgroundColor={backgroundColor}
        textColor={textColor}
        width={width}
        height={height}
      />
    </>
  );
}
