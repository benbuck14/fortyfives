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
    //console.log(deck)
    return deck
    //shuffled deck
}

let deck = shuffle(fullDeck);

round = {
    "round": 1,
    "deck": deck,
    "player1": {
        "team": "red",
        "cardinal": "south",
        "position": "dealer"
    },
    "player2": {
        "team": "blue",
        "cardinal": "west",
        "position": "left"
    },
    "player3": {
        "team": "red",
        "cardinal": "north",
        "position": "across"
    },
    "player4": {
        "team": "red",
        "cardinal": "south",
        "position": "right"
    }
}

function initialDeal(round){
    round.player1.hand = round.deck.splice(0,3)
    round.player2.hand = round.deck.splice(0,3)
    round.player3.hand = round.deck.splice(0,3)
    round.player4.hand = round.deck.splice(0,3)
    round.kitty = round.deck.splice(0,2)

    //console.log(round)

    return round
}

initialDeal(round);

function secondDeal(round){
    round.player1.hand.push(...round.deck.splice(0,2))
    round.player2.hand.push(...round.deck.splice(0,2))
    round.player3.hand.push(...round.deck.splice(0,2))
    round.player4.hand.push(...round.deck.splice(0,2))
    round.kitty.push(...round.deck.splice(0,2))

    //console.log(JSON.stringify(round,null,2))

    return round
}

secondDeal(round)

function bidding(round){
    let playerArray = [round.player1, round.player2, round.player3, round.player4]
    console.log(playerArray[Math.floor(Math.random()*4)])
}

bidding(round)