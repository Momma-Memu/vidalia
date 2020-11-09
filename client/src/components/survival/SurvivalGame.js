import React, { useState, useEffect } from 'react';
import Monster from './Monster';

const SurvivalGame = (props) => {
    const charId = Number(props.match.url[props.match.url.length - 1])

    const [playerData, setPlayerData] = useState([]);
    const [enemies, setEnemies] = useState([]);
    const [lower, setLower] = useState(0);
    const [upper, setUpper] = useState(1);
    const [depth, setDepth] = useState(0);

    useEffect(() => {
        getPlayerData();
        getEnemies();
    }, [])

    const getPlayerData = async() => {
        const res = await fetch('/api/character/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json' ,
            },
            body: JSON.stringify({ id: charId })
        })
        const data = await res.json();
        setPlayerData([data])
    }

    const getEnemies = async() => {
        const res = await fetch('/api/beasts/get-enemies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json' ,
            },
            body: JSON.stringify({ lower, upper })
        })
        const data = await res.json();
        setEnemies(data);
    }

    const monsters = enemies.map((enemy) => {
        return (
            <Monster data={enemy}/>
        )
    })

    const playerBar = playerData.map((data) => {
        return (
            <div>
                <div>{data.name}</div>
                <div className='HP-bar'>{data.hitPoints}</div>
            </div>
        )
    })

    return (
        <>
            <div className='monster-cards'>
                {monsters}
            </div>
            <div className='player-bar'>
                {playerBar}
            </div>
        </>

    )
}

export default SurvivalGame;