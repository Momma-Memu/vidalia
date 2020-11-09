import { d20 } from './dice';

const turns = (cards) => {
    const positions = [];
    for(let i = 0; i < cards.length - 1; i++){
        positions.push(d20.roll(1))
    }

    for(let i = 0; i < cards.length -1; i++){
        let card = cards[i]

        card['turn'] = positions[i]
        // console.log(cards[i])
    }

    positions.sort();
    return cards
}


export default turns;