import './Header.scss';

interface HeaderProps {
  isDark: boolean;
  baseAmount: number;
  setBaseAmount: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ isDark, baseAmount, setBaseAmount }: HeaderProps) {
  return (
    <header className={isDark ? 'header-dark' : 'header'}>
      <h1 className="header-title">Converter</h1>

      <div className="header-div">
        <input
          type="number"
          className="header-input"
          placeholder="Amout to convert..."
          value={baseAmount}
          onChange={(event) => {
            const amountInNumber = Number(event.target.value);

            if (!Number.isNaN(amountInNumber)) {
              setBaseAmount(amountInNumber);
            }
          }}
        />
        <p className="header-p"> €</p>
      </div>
    </header>
  );
}

export default Header;
