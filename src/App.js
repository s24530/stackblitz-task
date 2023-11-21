import React from 'react';
import './style.css';
import JSXRule from './components/JSXRule.js';
import FancyTable from './components/FancyTable';
import Multiple from './components/Multiple';

function App() {
  return (
    <>
      <JSXRule text="Co tu się dzieje many?!?!" />
      <FancyTable n={3} />
      <Multiple name="jajco" number={4} />
    </>
  );
}
export default App;
