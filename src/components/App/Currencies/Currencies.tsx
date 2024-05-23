import './Currencies.scss';

interface CurrenciesProps {
  currencies: {
    description: string;
    code: string;
    rate: number;
  }[];
  setCurrentCurrency: React.Dispatch<
    React.SetStateAction<{
      description: string;
      code: string;
      rate: number;
    }>
  >;
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
