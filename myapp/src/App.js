import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import {shuffle, fullDeck} from './deck.js';
import {player1, player2, player3, player4} from './players.js';
import { bidding } from './bidding.js';
import { initialDeal } from './initialDeal.js';
// import { game } from './gameObject.js';




function App() {
  let currentID = "a123";
  // currentID = "b456"
  // currentID = "c789"
  // currentID = "d000"
  console.log("fullDeck:" + fullDeck)
  const [deck, setDeck] = useState([]);
  const [south, setSouth] = useState(player1);
  const [west, setWest] = useState(player2);
  const [north, setNorth] = useState(player3);
  const [east, setEast] = useState(player4);
  const [kitty, setKitty] = useState([]);
  const [shuffled, setShuffled] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [currentBidder, setCurrentBidder] = useState(null);
  const [currentBid, setCurrentBid] = useState(null);
  const [highestBidder, setHighestBidder] = useState(null);

  useEffect(() => {
    // Set currentPlayer based on currentID
    if (south.id === currentID) {
      setCurrentPlayer(south);
    } else if (west.id === currentID) {
      setCurrentPlayer(west);
    } else if (north.id === currentID) {
      setCurrentPlayer(north);
    } else if (east.id === currentID) {
      setCurrentPlayer(east);
    }
  }, [currentID]);

  const handleShuffle = () => {
    console.log("test")
    const shuffledDeck = shuffle(fullDeck)
    console.log('Shuffled Deck:', deck); // Log shuffled deck
    setDeck(shuffledDeck);
    setShuffled(true);
    if(south.position === "left"){
      setCurrentBidder(south)
    }
    else if(west.position === "left"){
      setCurrentBidder(west)
    }
    else if(north.position === "left"){
      setCurrentBidder(north)
    }
    else if(east.position === "left"){
      setCurrentBidder(east)
    }
  };

  const handleBid = (buttonText, player) => {
    const bidArray = bidding(buttonText, player)
    console.log(bidArray)
    let bid = bidArray[1]
    console.log("bid" + bid)
    console.log("currentBid" + currentBid)
    let nextPosition = bidArray[0]
    if(bid > currentBid){
      console.log("bid > currentBid")
      setCurrentBid(bid)
      setHighestBidder(player)
    }
    if(south.position === nextPosition){
      setCurrentBidder(south)
    }
    else if(west.position === nextPosition){
      setCurrentBidder(west)
      console.log("set west")
    }
    else if(north.position === nextPosition){
      setCurrentBidder(north)
      console.log("set north")
    }
    else if(east.position === nextPosition){
      console.log("set east")
      setCurrentBidder(east)
    }
    console.log("Bid:" + currentBid)
    console.log("Next position:" + nextPosition)
    console.log("North position:" + north?.position)
    console.log("North id:" + north?.id)
    console.log("Highest Bidder:" + highestBidder?.id)
    console.log("Next Bidder:" + currentBidder?.id)
  }
  
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

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Forty Fives</h1>
        <button onClick={handleShuffle}>Deal</button>
    <br></br>
        <p>Your Hand</p>
        {south.hand.length > 0 && (
          <div>{currentPlayer?.id === south.id && south.hand.map(card => card.sn).join(', ')}</div>
        )}
        {west.hand.length > 0 && (
          <div>{currentPlayer?.id === west.id && west.hand.map(card => card.sn).join(', ')}</div>
        )}
        {north.hand.length > 0 && (
          <div>{currentPlayer?.id === north.id && north.hand.map(card => card.sn).join(', ')}</div>
        )}
        {east.hand.length > 0 && (
        <div>{currentPlayer?.id === east.id && east.hand.map(card => card.sn).join(', ')}</div>
        )}
        {currentPlayer?.position !== "dealer" && currentBidder?.position === currentPlayer?.position && (
        <>
          <br></br>
          <button onClick={() => handleBid("Bid 20", currentPlayer)}>Bid 20</button>
          <br></br>
          <button onClick={() => handleBid("Bid 25", currentPlayer)}>Bid 25</button>
          <br></br>
          <button onClick={() => handleBid("Bid 30", currentPlayer)}>Bid 30</button>
          <br></br>
          <button onClick={() => handleBid("Pass", currentPlayer)}>Pass</button>
          <br></br>
      </>
        )}
        {currentPlayer?.position === "dealer" && currentBidder?.position === currentPlayer?.position && (
        <>
          <br></br>
          <button onClick={() => handleBid("Hold", currentPlayer)}>Hold</button>
          <br></br>
          <button onClick={() => handleBid("Let them have it", currentPlayer)}>Let them have it</button>
          <br></br>
          <button onClick={() => handleBid("Bid 30", currentPlayer)}>Bid 30</button>
          <br></br>
          <button onClick={() => handleBid("Pass", currentPlayer)}>Pass</button>
          <br></br>
      </>
        )}

      </header>
    </div>
  );
}

export default App;
