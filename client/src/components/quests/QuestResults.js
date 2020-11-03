import { useScrollTrigger } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Nav from '../homeComponents/Nav';


const QuestResults = () => {
    const [questList, setQuestList] = useState([]);

    useEffect(() => {
        getQuests()
    }, [])

    const getQuests = async() => {
        const res = await fetch('/api/quests/')
        const data = await res.json();
        console.log(data)

        setQuestList(data)
    }

    const questElements = questList.map((quest) => {
        return (
            <div>
                <div>
                    <div>{quest.title}</div>
                    <div>{quest.User.username}</div>
                </div>
                <div>{quest.description}</div>
            </div>
        )
    })

    return(
        <>
            <Nav />
            {questElements}
        </>
    )
}

export default QuestResults;