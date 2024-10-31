import { useState } from 'react';
import ICurrency from '../../../@types/currency';
import './Currencies.scss';

interface CurrenciesProps {
  currencies: ICurrency[];
  setCurrentCurrency: React.Dispatch<React.SetStateAction<ICurrency>>;
}

function Currencies({ currencies, setCurrentCurrency }: CurrenciesProps) {
  const [searchValue, setSearchValue] = useState('');

  const filteredList = currencies.filter((currency) => {
    const descUpper = currency.description.toUpperCase();
    const serachUpper = searchValue.toUpperCase();
    return descUpper.includes(serachUpper);
  });

  return (
    <main className="main">
      <input
        type="text"
        className="main-search"
        placeholder="Search currency ..."
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchValue(event.target.value);
        }}
      />

      <h2 className="main-title">Currencies</h2>
      <ul className="main-list">
        {filteredList.map((currency) => (
          <div
            role="button"
            tabIndex={0}
            className="main-item"
            key={currency.code}
            onClick={() => setCurrentCurrency(currency)}
            onKeyDown={() => setCurrentCurrency(currency)}
          >
            {currency.description}
          </div>
        ))}
      </ul>
    </main>
  );
}

export default Currencies;
