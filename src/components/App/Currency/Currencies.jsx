import './Currencies.scss';

// import ICurrency from '../../../@types/currency';

// interface CurrenciesProps {
//   currencies: ICurrency[];
// }

function Currencies({ currencies }) {
  return (
    <main className="main">
      <h2 className="main-title">Currencies</h2>
      <ul className="main-list">
        {currencies.map((currency) => (
          <li className="main-item" key={currency.code}>
            {currency.description}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Currencies;
