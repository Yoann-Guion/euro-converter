import './Header.scss';

interface HeaderProps {
  isDark: boolean;
}

function Header({ isDark }: HeaderProps) {
  return (
    <header className={isDark ? 'header-dark' : 'header'}>
      <h1 className="header-title">Converter</h1>
      <p className="header-p">1 euro</p>
    </header>
  );
}

export default Header;
