import React, { useEffect, useState } from 'react'


const Beastiary = () => {
    const [beastList, setBeastList] = useState([]);

    useEffect(() => {
        getMonsters()
    }, [])

    const getMonsters = async(e) => {
        let letter;
        if(!e){
            letter = 'A'
        } else {
            letter = e.target.innerHTML
        }
        const res = await fetch(`/api/beasts/${letter}`)
        const data = await res.json();
        setBeastList(data)
        console.log(data)
    }

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z']
    const letterDivs = letters.map((lett) => <div onClick={getMonsters} className='letter'>{lett}</div> )

    const monsters = beastList.map((beast) => {
        return (
            <div key={beast.name} className='beast-card'>
                <div className='beast-name'>{beast.name}</div>
                <div className='beast-card-header'>
                    <div>{`Type: ${beast.type}`}</div>
                    <div>{`Alignment: ${beast.alignment}`}</div>
                </div>
                <div>
                    <div className='beast-card-stat1'>{`Armor Class: ${beast.armorClass}`}</div>
                    <div className='beast-card-stat2'>{`Charisma: ${beast.charisma}`}</div>
                    <div className='beast-card-stat1'>{`Constitution: ${beast.constitution}`}</div>
                    <div className='beast-card-stat2'>{`Dexterity: ${beast.dexterity}`}</div>
                    <div className='beast-card-stat1'>{`Dice: ${beast.hitDice}`}</div>
                    <div className='beast-card-stat2'>{`Hit Points: ${beast.hitPoints}`}</div>
                    <div className='beast-card-stat1'>{`Intelligence: ${beast.intelligence}`}</div>
                    <div className='beast-card-stat2'>{`Strength: ${beast.strength}`}</div>
                    <div className='beast-card-stat1'>{`Wisdom: ${beast.wisdom}`}</div>
                </div>
                <div className='beast-card-footer'>
                    <div>{`Weakness: ${beast.weakness}`}</div>
                    <div>{`Reward: ${beast.xpReward}:XP`}</div>
                </div>
            </div>
        )
    })

    return(
        <>
            <div className='beast-header'>Beastiary</div>
            <div className='letters'>
                {letterDivs}
            </div>
            <div className='monster-scroller'>
                {monsters}
            </div>
        </>
    )
}

export default Beastiary;