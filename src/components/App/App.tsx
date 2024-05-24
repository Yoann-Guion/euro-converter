import { useState } from 'react';

import TogglerDarkMode from './TogglerDarkMode/TogglerDarkMode';
import Header from './Header/Header';
import CurrencyDisplay from './CurrencyDisplay/CurrencyDisplay';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  // --- STATE 1 --- affichage ou non de la liste des monnaies (par défaut on l'affiche)
  const [isCurrenciesDisplayed, setIsCurrenciesDisplayed] = useState(true);

  // --- STATE 2 --- Mode dark ou light (thème light par défaut)
  const [isDark, setIsDark] = useState(false);

  // --- STATE 3 --- Devise courante (USD par défaut)
  const [currentCurrency, setCurrentCurrency] = useState(currencies[30]);

  // --- STATE 4 --- Choix du montant dans l'input du header
  const [baseAmount, setBaseAmount] = useState(1);

  // Calcul de la valeur en fonction du taux
  const convertedValue = baseAmount * currentCurrency.rate;

  return (
    <div className={isDark ? 'App App-dark' : 'App'}>
      <TogglerDarkMode isDark={isDark} setIsDark={setIsDark} />

      <Header
        isDark={isDark}
        baseAmount={baseAmount}
        setBaseAmount={setBaseAmount}
      />

      <CurrencyDisplay
        isCurrenciesDisplayed={isCurrenciesDisplayed}
        setIsCurrenciesDisplayed={setIsCurrenciesDisplayed}
      />

      {isCurrenciesDisplayed && (
        <Currencies
          currencies={currencies}
          setCurrentCurrency={setCurrentCurrency}
        />
      )}

      <Result currency={currentCurrency} convertedValue={convertedValue} />
    </div>
  );
}

export default App;
