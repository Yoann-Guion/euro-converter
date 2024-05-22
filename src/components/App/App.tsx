import Header from './Header/Header';
import Currencies from './Currency/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Currencies description={currencies.description} code={currencies.code} />
      <Result />
    </div>
  );
}

export default App;
