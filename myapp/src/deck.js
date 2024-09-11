export const fullDeck = [
    {"suit": "spades", "number": "A", "status": "deck", "sn": "AS"},
    {"suit": "spades", "number": "2", "status": "deck", "sn": "2S"},
    {"suit": "spades", "number": "3", "status": "deck", "sn": "3S"},
    {"suit": "spades", "number": "4", "status": "deck", "sn": "4S"},
    {"suit": "spades", "number": "5", "status": "deck", "sn": "5S"},
    {"suit": "spades", "number": "6", "status": "deck", "sn": "6S"},
    {"suit": "spades", "number": "7", "status": "deck", "sn": "7S"},
    {"suit": "spades", "number": "8", "status": "deck", "sn": "8S"},
    {"suit": "spades", "number": "9", "status": "deck", "sn": "9S"},
    {"suit": "spades", "number": "10", "status": "deck", "sn": "10S"},
    {"suit": "spades", "number": "J", "status": "deck", "sn": "JS"},
    {"suit": "spades", "number": "Q", "status": "deck", "sn": "QS"},
    {"suit": "spades", "number": "K", "status": "deck", "sn": "KS"},

    {"suit": "hearts", "number": "A", "status": "deck", "sn": "AH"},
    {"suit": "hearts", "number": "2", "status": "deck", "sn": "2H"},
    {"suit": "hearts", "number": "3", "status": "deck", "sn": "3H"},
    {"suit": "hearts", "number": "4", "status": "deck", "sn": "4H"},
    {"suit": "hearts", "number": "5", "status": "deck", "sn": "5H"},
    {"suit": "hearts", "number": "6", "status": "deck", "sn": "6H"},
    {"suit": "hearts", "number": "7", "status": "deck", "sn": "7H"},
    {"suit": "hearts", "number": "8", "status": "deck", "sn": "8H"},
    {"suit": "hearts", "number": "9", "status": "deck", "sn": "9H"},
    {"suit": "hearts", "number": "10", "status": "deck", "sn": "10H"},
    {"suit": "hearts", "number": "J", "status": "deck", "sn": "JH"},
    {"suit": "hearts", "number": "Q", "status": "deck", "sn": "QH"},
    {"suit": "hearts", "number": "K", "status": "deck", "sn": "KH"},

    {"suit": "diamonds", "number": "A", "status": "deck", "sn": "AD"},
    {"suit": "diamonds", "number": "2", "status": "deck", "sn": "2D"},
    {"suit": "diamonds", "number": "3", "status": "deck", "sn": "3D"},
    {"suit": "diamonds", "number": "4", "status": "deck", "sn": "4D"},
    {"suit": "diamonds", "number": "5", "status": "deck", "sn": "5D"},
    {"suit": "diamonds", "number": "6", "status": "deck", "sn": "6D"},
    {"suit": "diamonds", "number": "7", "status": "deck", "sn": "7D"},
    {"suit": "diamonds", "number": "8", "status": "deck", "sn": "8D"},
    {"suit": "diamonds", "number": "9", "status": "deck", "sn": "9D"},
    {"suit": "diamonds", "number": "10", "status": "deck", "sn": "10D"},
    {"suit": "diamonds", "number": "J", "status": "deck", "sn": "JD"},
    {"suit": "diamonds", "number": "Q", "status": "deck", "sn": "QD"},
    {"suit": "diamonds", "number": "K", "status": "deck", "sn": "KD"},

    {"suit": "clubs", "number": "A", "status": "deck", "sn": "AC"},
    {"suit": "clubs", "number": "2", "status": "deck", "sn": "2C"},
    {"suit": "clubs", "number": "3", "status": "deck", "sn": "3C"},
    {"suit": "clubs", "number": "4", "status": "deck", "sn": "4C"},
    {"suit": "clubs", "number": "5", "status": "deck", "sn": "5C"},
    {"suit": "clubs", "number": "6", "status": "deck", "sn": "6C"},
    {"suit": "clubs", "number": "7", "status": "deck", "sn": "7C"},
    {"suit": "clubs", "number": "8", "status": "deck", "sn": "8C"},
    {"suit": "clubs", "number": "9", "status": "deck", "sn": "9C"},
    {"suit": "clubs", "number": "10", "status": "deck", "sn": "10C"},
    {"suit": "clubs", "number": "J", "status": "deck", "sn": "JC"},
    {"suit": "clubs", "number": "Q", "status": "deck", "sn": "QC"},
    {"suit": "clubs", "number": "K", "status": "deck", "sn": "KC"}
];


export function shuffle(fullDeck){
    let deck = fullDeck.slice();
    for(let i = deck.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [deck[i],deck[j]] =[deck[j],deck[i]];
    }
    return deck

    //shuffled deck
}