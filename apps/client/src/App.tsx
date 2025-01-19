import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const initialState = 0;

function App(): JSX.Element {
  const [count, setCount] = useState(initialState);

  const onClick = (): void => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <a href='https://vite.dev' rel='noreferrer noopener' target='_blank'>
          <img alt='Vite logo' className='logo' src={viteLogo} />
        </a>
        <a href='https://react.dev' rel='noreferrer noopener' target='_blank'>
          <img
            alt='React logo'
            className='logo react'
            rel='noreferrer noopener'
            src={reactLogo}
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button type='button' onClick={onClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
