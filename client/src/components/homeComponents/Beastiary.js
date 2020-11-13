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
    }

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z']
    const letterDivs = letters.map((lett) => <div onClick={getMonsters} className='letter'>{lett}</div> )

    const monsters = beastList.map((beast) => {
        return (
            <div key={beast.id} className='beast-card'>
                <div key={beast.name} className='beast-name'>{beast.name}</div>
                <div className='beast-card-header'>
                    <div key={beast.type}>{`Type: ${beast.type}`}</div>
                    <div key={beast.alignment}>{`Alignment: ${beast.alignment}`}</div>
                </div>
                <div>
                    <div key={beast.armorClass} className='beast-card-stat1'>{`Armor Class: ${beast.armorClass}`}</div>
                    <div key={beast.charisma} className='beast-card-stat2'>{`Charisma: ${beast.charisma}`}</div>
                    <div key={beast.constitution} className='beast-card-stat1'>{`Constitution: ${beast.constitution}`}</div>
                    <div key={beast.dexterity} className='beast-card-stat2'>{`Dexterity: ${beast.dexterity}`}</div>
                    <div key={beast.hitDice} className='beast-card-stat1'>{`Dice: ${beast.hitDice}`}</div>
                    <div key={beast.hitPoints} className='beast-card-stat2'>{`Hit Points: ${beast.hitPoints}`}</div>
                    <div key={beast.intelligence} className='beast-card-stat1'>{`Intelligence: ${beast.intelligence}`}</div>
                    <div key={beast.strength} className='beast-card-stat2'>{`Strength: ${beast.strength}`}</div>
                    <div key={beast.wisdom} className='beast-card-stat1'>{`Wisdom: ${beast.wisdom}`}</div>
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