import React from 'react';


const Monster = ({data}) => {
    // console.log(data)
    const initiative = data.turn;

    const rolls = Number(data.hitDice.split('d')[0])
    const sides = Number(data.hitDice.split('d')[1])
    let diceName = [data.hitDice.split('d')[1]]
    diceName.unshift('d')
    diceName = diceName.join('')

    return (
        <div className='monster-card'>
            <div className='monster-card-name'>{data.name}</div>
            <div className='monster-health'>{data.hitPoints}</div>
            <div>{data.type}</div>
            <div>{!data.turn ? '' : `Initiative: ${data.turn}`}</div>
        </div>
    )
}

export default Monster;