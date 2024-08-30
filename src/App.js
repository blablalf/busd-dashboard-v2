// import DoSomething from './Components/DoSomething.js';
import './App.css';
import WalletButton from './Components/WalletButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
        /* <DoSomething/> */
          <WalletButton />
        }
      </header>
    </div>
  );
}

export default App;
