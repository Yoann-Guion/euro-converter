import ICurrency from '../../../@types/currency';
import './Currencies.scss';

interface CurrenciesProps {
  currencies: ICurrency[];
  setCurrentCurrency: React.Dispatch<React.SetStateAction<ICurrency>>;
}

function Currencies({ currencies, setCurrentCurrency }: CurrenciesProps) {
  return (
    <main className="main">
      <h2 className="main-title">Currencies</h2>
      <ul className="main-list">
        {currencies.map((currency) => (
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
