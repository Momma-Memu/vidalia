import React from 'react';


const Monster = ({data}) => {
    console.log(data)

    const rolls = Number(data.hitDice.split('d')[0])
    const sides = Number(data.hitDice.split('d')[1])
    let diceName = [data.hitDice.split('d')[1]]
    diceName.unshift('d')
    diceName = diceName.join('')

    return (
        <div className='monster-card'>
            <div>{data.name}</div>
        </div>
    )
}

export default Monster;