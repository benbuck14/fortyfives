import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import {shuffle, fullDeck} from './deck.js';
import {player1, player2, player3, player4} from './players.js';
import { bidding } from './bidding.js';
import { initialDeal } from './initialDeal.js';
import { discard } from './discard.js';
// import { game } from './gameObject.js';




function App() {
  let currentID = "a123";
  currentID = "b456"
  currentID = "c789"
  // currentID = "d000"
  const [deck, setDeck] = useState([]);
  const [south, setSouth] = useState(player1);
  const [west, setWest] = useState(player2);
  const [north, setNorth] = useState(player3);
  const [east, setEast] = useState(player4);
  const [kitty, setKitty] = useState([]);
  const [shuffled, setShuffled] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [currentBidder, setCurrentBidder] = useState(null);
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState(null);
  const [held, setHeld] = useState(false);
  const [wonBid, setWonBid] = useState(null);
  const [bidWinner, setBidWinner] = useState(null);
  const [trump, setTrump] = useState(null);
  const [goKitty, setGoKitty] = useState(false);
  const [go5, setGo5] = useState(false);

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
    setHeld(false)
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
    console.log("handling bid, highest bidder:" + highestBidder)
    const bidArray = bidding(buttonText, player)
    console.log(bidArray)
    let bid = bidArray[1]
    console.log("bid" + bid)
    console.log("currentBid" + currentBid)
    console.log("setHeld::" + held)
    let nextPosition = bidArray[0]
    if(held == true){
      nextPosition = "dealer"
      console.log("inside set held function")
      if(bid === 0){
        setWonBid(currentBid)
        console.log("dealerwonbid")
        if(south.position === "dealer"){
          setBidWinner(south)
        }
        else if(west.position === "dealer"){
          setBidWinner(west)
          console.log("set west")
        }
        else if(north.position === "dealer"){
          setBidWinner(north)
          console.log("set north")
        }
        else if(east.position === "dealer"){
          setBidWinner(east)
        }
      }
      setHeld(false)
    }
    if(bid === "held"){
      setCurrentBidder(highestBidder)
      setHeld(true)
      console.log("set held to true")
    }
    if(nextPosition === "bidder" && bid === 0){
      setWonBid(currentBid)
      setBidWinner(highestBidder)
    }
    
    console.log("testing bid isn't empty:" + bid)
    console.log(currentBid)
    if(bid > currentBid){
      console.log("bid > currentBid")
      setCurrentBid(bid)
      if(player.position !== "dealer"){
        setHighestBidder(player)
        console.log("setting highest bidder")
      }
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

    const handleTrumpSelect = (suitSelected, player) => {
      setTrump(suitSelected)
    }
    const handleGoKitty = (player) => {
      console.log("Going on the kitty")
      player.hand.splice(0, 5)
      player.hand.push(...kitty)
      setGoKitty(true)
    }
    const handleGo5 = (player) => {
      console.log("Going on 5")
      player.hand.splice(0, 4)
      let new5 = deck.splice(0,5)
      player.hand.push(...new5)
      setGo5(true)
    }
    const handleDiscard = (card, index, player) => {
      discard(card, index, player)
    }
    const handleDiscardingComplete = (player) => {
      
    }

    const availableBids = [20, 25, 30];
    const validBids = availableBids.filter(bid => bid > currentBid);
  return (
    <div className="App">
     <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Forty Fives</h1>
        <button onClick={handleShuffle}>Deal</button>
    <br></br>
    <div className='handDisplay'>

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
        </div>
        <div className='bidDisplay'>

        {currentPlayer?.position !== "dealer" && currentBidder?.position === currentPlayer?.position && (
          <>
          <br />
        {validBids.map(bid => (
          <React.Fragment key={bid}>
        <button onClick={() => handleBid(`Bid ${bid}`, currentPlayer)}>Bid {bid}</button>
        <br />
      </React.Fragment>
    ))}
    <button onClick={() => handleBid("Pass", currentPlayer)}>Pass</button>
    <br />
      </>
        )}
        {currentPlayer?.position === "dealer" && currentBidder?.position === currentPlayer?.position && wonBid == null && (
          <>
          <br></br>
          {currentBid === 0 ? (
            <button onClick={() => handleBid("Bid 20", currentPlayer)}>Bid 20</button>
          ) : (
            <button onClick={() => handleBid("Hold", currentPlayer)}>Hold</button>
          )}
          <br></br>
          <button onClick={() => handleBid("Pass", currentPlayer)}>Pass</button>
          <br></br>
      </>
        )}
        </div>
        <div className='trumpSelect'>
          {
            currentPlayer?.id === bidWinner?.id && (
              <>
              <h2>Select Trump</h2>
              <button onClick={()=>handleTrumpSelect("diamonds", currentPlayer)}>Diamonds</button>
              <br></br>
              <button onClick={()=>handleTrumpSelect("hearts", currentPlayer)}>Hearts</button>
              <br></br>
              <button onClick={()=>handleTrumpSelect("clubs", currentPlayer)}>Clubs</button>
              <br></br>
              <button onClick={()=>handleTrumpSelect("spades", currentPlayer)}>Spades</button>
              <br></br>
              {!go5 (!goKitty ? (
                <button onClick={()=>handleGoKitty(currentPlayer)}>Go on the kitty</button>
              ) : (
              <button onClick={()=>handleGo5(currentPlayer)}>Go on 5 cards</button>
              ))}
              </>
            )
          }
        </div>
        <div className='discard'>
          {
            trump !== null  && (
              <>
              <h3>Click a card to disard it.  When complete press "Discarding Complete"</h3>
              <div>
                {currentPlayer?.hand.map((card, index) => <button onClick={()=>handleDiscard(card, index, currentPlayer)}>{card.sn}</button>)}
                </div>
                <br></br>
                <button onClick={()=>handleDiscardingComplete(currentPlayer)}>Discarding Complete</button>
              </>
            )
          }
        </div>
          </header>
    </div>
  );
}

export default App;
