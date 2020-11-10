import { d20 } from './dice';

const turns = (cards) => {
    for(let i = 0; i < cards.length; i++){
        cards[i]['turn'] = d20.roll(1)
    }

    console.log(cards)
    return cards
}


export default turns;