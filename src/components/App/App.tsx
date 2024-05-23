import { useState } from 'react';

// Import des icones :
import { Sun, Moon, ArrowDown, ArrowUp } from 'react-feather';

import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  // --- STATE 1 --- affichage ou non de la liste des monnaies
  const [isCurrenciesDisplayed, setIsCurrenciesDisplayed] = useState(true);

  // --- STATE 2 --- Mode dark :
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'App App-dark' : 'App'}>
      <button
        className={isDark ? 'App-button' : 'App-button-dark'}
        type="button"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? <Sun /> : <Moon />}
      </button>

      <Header isDark={isDark} />

      <button
        className="currenciesBtn"
        type="button"
        onClick={() => {
          setIsCurrenciesDisplayed(!isCurrenciesDisplayed);
        }}
      >
        {isCurrenciesDisplayed ? <ArrowUp /> : <ArrowDown />}{' '}
        {isCurrenciesDisplayed ? 'Hide' : 'Show'} currencies
      </button>

      {isCurrenciesDisplayed && <Currencies currencies={currencies} />}

      <Result />
    </div>
  );
}

export default App;
