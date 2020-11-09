import React, { useState, useEffect } from 'react'

const SurvivalGame = (props) => {
    const charId = Number(props.match.url[props.match.url.length - 1])

    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        getPlayerData();
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

    const playerBar = playerData.map((data) => {
        return (
            <div>
                <div>{data.name}</div>
                <div className='HP-bar'>{data.hitPoints}</div>
            </div>
        )
    })

    return (
        <div className='player-bar'>
            {playerBar}
        </div>

    )
}

export default SurvivalGame;