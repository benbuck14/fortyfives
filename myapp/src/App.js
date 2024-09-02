import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import {shuffle, fullDeck} from './deck.js';
import {player1, player2, player3, player4} from './players.js';
import { bidding } from './bidding.js';
import { initialDeal } from './initialDeal.js';
// import { game } from './gameObject.js';





function App() {
  console.log("fullDeck:" + fullDeck)
  const [deck, setDeck] = useState([]);
  const [south, setSouth] = useState(player1);
  const [west, setWest] = useState(player2);
  const [north, setNorth] = useState(player3);
  const [east, setEast] = useState(player4);
  const [kitty, setKitty] = useState([]);
  const [shuffled, setShuffled] = useState(false)

  const handleShuffle = () => {
    console.log("test")
    const shuffledDeck = shuffle(fullDeck)
    console.log('Shuffled Deck:', deck); // Log shuffled deck
    setDeck(shuffledDeck);
    setShuffled(true);
  };
  
    useEffect(()=>{
      if(shuffled && deck.length > 0){
        const [hand1, hand2, hand3, hand4, dealtKitty] = initialDeal(deck);
        setSouth({...south,hand: hand1})
        setWest({...west,hand: hand2})
        setNorth({...north,hand: hand3})
        setEast({...east,hand: hand4})
        setKitty(dealtKitty)
        setShuffled(false)
      }
    },[shuffled, deck])

  return (
    <div className="App">
     <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Forty Fives</h1>
        <button onClick={handleShuffle}>Deal</button>
        {deck.length > 0 && <p>{deck[0].sn}</p>}
        <p>Player 1 Hand</p>
        {south.hand.length > 0 && south.hand.map((card, index)=> <p key={index}>{card.sn}</p>)}
      </header>
    </div>
  );
}

export default App;
