export function secondDeal(game){
    game.player1.hand.push(...game.deck.splice(0,2))
    game.player2.hand.push(...game.deck.splice(0,2))
    game.player3.hand.push(...game.deck.splice(0,2))
    game.player4.hand.push(...game.deck.splice(0,2))
    game.kitty.push(...game.deck.splice(0,2))

    //console.log(JSON.stringify(game,null,2))

    return game
}