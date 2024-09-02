export function initialDeal(deck){
    console.log("testing deal function" + deck[0])
    let hand1 = deck.splice(0,3)
    let hand2 = deck.splice(0,3)
    let hand3 = deck.splice(0,3)
    let hand4 = deck.splice(0,3)
    let dealtKitty = deck.splice(0,2)
    hand1.push(...deck.splice(0,2))
    hand2.push(...deck.splice(0,2))
    hand3.push(...deck.splice(0,2))
    hand4.push(...deck.splice(0,2))
    dealtKitty.push(...deck.splice(0,2))

    let hands = [hand1, hand2, hand3, hand4, dealtKitty]

    return hands
}