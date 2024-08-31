import './App.css';
import WalletButton from './Components/WalletButton.js';
import Modal from 'react-modal';
import Popup from './Components/Popup.js';

Modal.setAppElement('#root'); // For accessibility

function App() {


  return (
    <div className="App">
      <header className="App-header">
        {
          <WalletButton />
        }
      </header>
      <body>
        <Popup/>
      </body>
    </div>
  );
}

export default App;
