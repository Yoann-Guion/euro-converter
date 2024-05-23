import { useState } from 'react';

import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  // Mode dark :
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <Header />
      <button
        type="button"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Dark mode
      </button>
      <Currencies currencies={currencies} />
      <Result />
    </div>
  );
}

export default App;
