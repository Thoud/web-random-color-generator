import { useState } from 'react';
import RandomColorBox from './RandomColorBox';
import ParamDisplay from './ParamDisplay';

// Function for converting hsl to hex
const hslToHex = (h, s, l) => {
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
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1) r = '0' + r;
  if (g.length === 1) g = '0' + g;
  if (b.length === 1) b = '0' + b;

  return '#' + r + g + b;
};

export default function App() {
  //States
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100));
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100));
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(400);

  // Converting the hsl input from the user to hex
  const color = hslToHex(hue, saturation, lightness);

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
      />
      <RandomColorBox color={color} width={width} height={height} />
    </>
  );
}
