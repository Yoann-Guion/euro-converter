import './CurrencyDisplay.scss';

// Import des icones :
import { ArrowDown, ArrowUp } from 'react-feather';

interface CurrencyDisplayProps {
  isCurrenciesDisplayed: boolean;
  setIsCurrenciesDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

function CurrencyDisplay({
  isCurrenciesDisplayed,
  setIsCurrenciesDisplayed,
}: CurrencyDisplayProps) {
  return (
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
  );
}

export default CurrencyDisplay;
