function shuffle(fullDeck){
    let deck = fullDeck.slice();
    for(let i = deck.length - 1; i>0; i--){
        Math.floor(Math.random()*(i+1));
        [deck[i],deck[j]] =[deck[j],deck[i]];
    }
    console.log(deck)
    return deck
    //shuffled deck
}
