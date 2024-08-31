export function initialDeal(game){
    game.player1.hand = game.deck.splice(0,3)
    game.player2.hand = game.deck.splice(0,3)
    game.player3.hand = game.deck.splice(0,3)
    game.player4.hand = game.deck.splice(0,3)
    game.kitty = game.deck.splice(0,2)

    //console.log(game)

    return game
}