

export function bidding(buttonText, currentPlayer){
    // let playerArray = [game.player1, game.player2, game.player3, game.player4]
    // console.log(playerArray[Math.floor(Math.random()*4)])
    let nextPosition = null
    let bid = 0
    if(currentPlayer.position === "left"){
        nextPosition = "across"
    }
    else if(currentPlayer.position === "across"){
        nextPosition = "right"
    }
    else if(currentPlayer.position === "right"){
        nextPosition = "dealer"
    }
     if(buttonText === "Pass"){
        return [nextPosition, bid]
     }
    if(buttonText === "Pass"){
        bid = 20
    }
    if(buttonText === "Bid 20"){
        bid = 20
    }
    else if(buttonText === "Bid 25"){
        bid = 25
    }
    else if(buttonText === "Bid 30"){
        bid = 30
    }

    return [nextPosition, bid]


}