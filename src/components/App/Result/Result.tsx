import ICurrency from '../../../@types/currency';
import './Result.scss';

interface ResultProps {
  currency: ICurrency;
  convertedValue: number;
}

function Result({ currency, convertedValue }: ResultProps) {
  return (
    <footer className="footer">
      <h2 className="footer-title">
        {convertedValue} {currency.code}
      </h2>
      <p className="footer-p">{currency.description}</p>
    </footer>
  );
}

export default Result;
