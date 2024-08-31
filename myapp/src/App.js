import logo from './logo.svg';
import './App.css';
import React from 'react';
import {shuffle, fullDeck} from './deck.js';
import { bidding } from './bidding.js';
import { initialDeal } from './initialDeal.js';
import { game } from './gameObject.js';





function App() {
  return (
    <div className="App">
     <header className="App-header">
      {/* {game.deck = shuffle(fullDeck)} */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Forty Fives</h1>
        <button onClick={initialDeal}>Deal</button>
        {game.deck[0].sn}
        <p>Player 1 Hand</p>
        {/* {game.player1.hand.length > 0 ? (
          <div>
            {game.player1.hand[0].sn} 
            {game.player1.hand[1].sn} 
            {game.player1.hand[2].sn} 
            {game.player1.hand[3].sn} 
            {game.player1.hand[4].sn}
          </div>
        ) : (
          <div>No cards dealt yet.</div>
        )} */}
      </header>
    </div>
  );
}

export default App;
