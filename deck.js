const fullDeck = [
    {"suit": "spades", "number": "A", "status": "deck"},
    {"suit": "spades", "number": "2", "status": "deck"},
    {"suit": "spades", "number": "3", "status": "deck"},
    {"suit": "spades", "number": "4", "status": "deck"},
    {"suit": "spades", "number": "5", "status": "deck"},
    {"suit": "spades", "number": "6", "status": "deck"},
    {"suit": "spades", "number": "7", "status": "deck"},
    {"suit": "spades", "number": "8", "status": "deck"},
    {"suit": "spades", "number": "9", "status": "deck"},
    {"suit": "spades", "number": "10", "status": "deck"},
    {"suit": "spades", "number": "J", "status": "deck"},
    {"suit": "spades", "number": "Q", "status": "deck"},
    {"suit": "spades", "number": "K", "status": "deck"},

    {"suit": "hearts", "number": "A", "status": "deck"},
    {"suit": "hearts", "number": "2", "status": "deck"},
    {"suit": "hearts", "number": "3", "status": "deck"},
    {"suit": "hearts", "number": "4", "status": "deck"},
    {"suit": "hearts", "number": "5", "status": "deck"},
    {"suit": "hearts", "number": "6", "status": "deck"},
    {"suit": "hearts", "number": "7", "status": "deck"},
    {"suit": "hearts", "number": "8", "status": "deck"},
    {"suit": "hearts", "number": "9", "status": "deck"},
    {"suit": "hearts", "number": "10", "status": "deck"},
    {"suit": "hearts", "number": "J", "status": "deck"},
    {"suit": "hearts", "number": "Q", "status": "deck"},
    {"suit": "hearts", "number": "K", "status": "deck"},

    {"suit": "diamonds", "number": "A", "status": "deck"},
    {"suit": "diamonds", "number": "2", "status": "deck"},
    {"suit": "diamonds", "number": "3", "status": "deck"},
    {"suit": "diamonds", "number": "4", "status": "deck"},
    {"suit": "diamonds", "number": "5", "status": "deck"},
    {"suit": "diamonds", "number": "6", "status": "deck"},
    {"suit": "diamonds", "number": "7", "status": "deck"},
    {"suit": "diamonds", "number": "8", "status": "deck"},
    {"suit": "diamonds", "number": "9", "status": "deck"},
    {"suit": "diamonds", "number": "10", "status": "deck"},
    {"suit": "diamonds", "number": "J", "status": "deck"},
    {"suit": "diamonds", "number": "Q", "status": "deck"},
    {"suit": "diamonds", "number": "K", "status": "deck"},

    {"suit": "clubs", "number": "A", "status": "deck"},
    {"suit": "clubs", "number": "2", "status": "deck"},
    {"suit": "clubs", "number": "3", "status": "deck"},
    {"suit": "clubs", "number": "4", "status": "deck"},
    {"suit": "clubs", "number": "5", "status": "deck"},
    {"suit": "clubs", "number": "6", "status": "deck"},
    {"suit": "clubs", "number": "7", "status": "deck"},
    {"suit": "clubs", "number": "8", "status": "deck"},
    {"suit": "clubs", "number": "9", "status": "deck"},
    {"suit": "clubs", "number": "10", "status": "deck"},
    {"suit": "clubs", "number": "J", "status": "deck"},
    {"suit": "clubs", "number": "Q", "status": "deck"},
    {"suit": "clubs", "number": "K", "status": "deck"}
]

function shuffle(fullDeck){
    let deck = fullDeck.slice();
    for(let i = deck.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [deck[i],deck[j]] =[deck[j],deck[i]];
    }
    console.log(deck)
    return deck
    //shuffled deck
}

shuffle(fullDeck);