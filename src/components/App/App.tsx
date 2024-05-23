import { useState } from 'react';

// Import des icones :
import { ArrowDown, ArrowUp } from 'react-feather';

import TogglerDarkMode from './TogglerDarkMode/TogglerDarkMode';
import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  // --- STATE 1 --- affichage ou non de la liste des monnaies (par défaut on l'affiche)
  const [isCurrenciesDisplayed, setIsCurrenciesDisplayed] = useState(true);

  // --- STATE 2 --- Mode dark ou light (par défaut on utilise le thème light)
  const [isDark, setIsDark] = useState(false);

  // --- STATE 3 --- Devise courante (USD par défaut)
  const [currentCurrency, setCurrentCurrency] = useState(currencies[30]);

  return (
    <div className={isDark ? 'App App-dark' : 'App'}>
      <TogglerDarkMode isDark={isDark} setIsDark={setIsDark} />

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

      {isCurrenciesDisplayed && (
        <Currencies
          currencies={currencies}
          setCurrentCurrency={setCurrentCurrency}
        />
      )}

      <Result
        description={currentCurrency.description}
        convertedValue={1 * currentCurrency.rate}
      />
    </div>
  );
}

export default App;
