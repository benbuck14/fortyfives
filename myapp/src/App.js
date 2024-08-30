import logo from './logo.svg';
import './App.css';
import {shuffle, fullDeck} from './deck.js';

let deck = shuffle(fullDeck)



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Forty Fives
        </p>
        <div>{deck[0].suit}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
