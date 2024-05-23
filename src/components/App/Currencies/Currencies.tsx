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
          <li
            className="main-item"
            key={currency.code}
            onClick={() => setCurrentCurrency(currency)}
          >
            {currency.description}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Currencies;
