import React, { useState, useEffect } from 'react';
import Monster from './Monster';
import Player from './Player';
import turns from '../../helpers/turns';
import { NavLink } from 'react-router-dom';

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

    const monsters = enemies.map((enemy) => <Monster data={enemy}/>)

    const playerBar = playerData.map((data) => <Player data={data} />)

    const handleTurns = (e) => {
        const cards = [...enemies, ...playerData]
        const objects = turns(cards)
        // const arr = []
        // objects.forEach(el => {
        //     arr.push(el['turn'])
        // });
        // arr.sort()
        // console.log(arr)
        const updatedPlayerData = objects.pop();
        console.log(updatedPlayerData)
        setPlayerData([updatedPlayerData]);
        setEnemies(objects)
    }

    return (
        <>
            <div className='survival-nav-bar'>
                <div className='back-button2'>
                    <NavLink to='/' className='button-links2'>
                        <i class="fas fa-arrow-circle-left back-icon"></i>
                        <div>Quit</div>
                    </NavLink>
                </div>
                <div className='depth-rank'>{`Current Depth: ${depth}`}</div>
            </div>
            <div className='monster-cards'>
                {monsters}
            </div>
            <div className='roll-container'>
                <div className='roll-button' onClick={handleTurns}>Roll for initiative</div>
            </div>
            <div className='player-bar'>
                {playerBar}
            </div>
        </>

    )
}

export default SurvivalGame;