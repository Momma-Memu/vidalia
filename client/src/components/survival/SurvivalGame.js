import React, { useState, useEffect, useRef } from 'react';
import Monster from './Monster';
import Player from './Player';
import turns from '../../helpers/turns';
import { NavLink } from 'react-router-dom';


const SurvivalGame = (props) => {
    const charId = Number(props.match.url[props.match.url.length - 1])

    const initiativeRollButn = useRef();

    const [playerData, setPlayerData] = useState([]);
    const [currentHealth, setCurrentHealth] = useState(10);
    const [enemies, setEnemies] = useState([]);
    const [lower, setLower] = useState(0);
    const [upper, setUpper] = useState(0.5);
    const [depth, setDepth] = useState(0);
    const [cleardRoom, setClearedRoom] = useState(0);
    const [status, setStatus] = useState('');
    const [turnList, setTurnList] = useState([]);
    const [turn, setTurn] = useState(null)

    const deadBoolean = currentHealth <= 0;

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

    const monsters = enemies.map((enemy) =>
    <Monster currentHealth={currentHealth} setCurrentHealth={setCurrentHealth}
    playerData={playerData} turnList={turnList} setTurnList={setTurnList}
     setTurn={setTurn} turn={turn} data={enemy} enemies={enemies} setEnemies={setEnemies}
     status={status} setStatus={setStatus}/>)

    const playerBar = playerData.map((data) => <Player currentHealth={currentHealth}
    setCurrentHealth={setCurrentHealth} status={status} setStatus={setStatus} setTurn={setTurn} turn={turn} turnList={turnList} setTurnList={setTurnList} turn={turn} data={data} />)

    const handleTurns = (e) => {
        initiativeRollButn.current.classList.add('hide');
        const cards = [...enemies, ...playerData]
        const objects = turns(cards)
        let arr = []
        objects.forEach(el => {
            arr.push(el.turn)
        });
        arr.sort((a, b) => b - a)
        setTurnList(arr);
        setTurn(arr[0])
        const updatedPlayerData = objects.pop();
        setPlayerData([updatedPlayerData]);
        setEnemies(objects)
    }

    if(deadBoolean){
        return (
            <div>
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
                <div className='death-container'>
                    <div className='you-died'>You Died...</div>
                    <div className='back-button3'>
                        <NavLink to='/survival-start' className='button-links2'>
                            <div>Try Again?</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
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
            <div className='roll-container' ref={initiativeRollButn}>
                <div className='roll-button' onClick={handleTurns}>Roll for initiative</div>
            </div>
            <div className='player-bar'>
                {playerBar}
            </div>
        </>
    )
}

export default SurvivalGame;