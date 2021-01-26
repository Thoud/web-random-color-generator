import { useState, useEffect } from 'react';
import RandomColorBox from './RandomColorBox';
import ParamDisplay from './ParamDisplay';

export default function App() {
  return (
    <>
      <ParamDisplay />
      <RandomColorBox />
    </>
  );
}
