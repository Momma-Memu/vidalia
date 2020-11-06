import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { authContext } from '../../Context';
import TextField from '@material-ui/core/TextField';


const CreateCharacter = () => {
    const [name, setName] = useState('');
    const [story, setStory] = useState('');
    const [abilityId, setAbilityId] = useState(null);
    const [classId, setClassId] = useState(null);
    const [classChoices, setClassChoices] = useState([]);
    const [abilityChoices, setAbilityChoices] = useState([]);

    const { id } = useContext(authContext);

    useEffect(() => {
        getFormDataInfo();
    }, [])

    const getFormDataInfo = async() => {
        const res = await fetch('/api/create-character/form-data-info')
        const data = await res.json();
        console.log(data)
        setAbilityChoices(data.abilities);
        setClassChoices(data.classes)
    }

    const handleCreateCharacter = () => {

    }

    const chooseAbility = (e) => {
        console.log(e.target)
    }

    const chooseClass = (e) => {
        console.log(e.target)
    }


    const abilityElements = abilityChoices.map((ability) => {
        return(
            <div className='ability-list'>
                <div className='ability-name'>{`Ability: ${ability.name}`}</div>
                <div className='ability-description'>{`Description: ${ability.description}`}</div>
            </div>
        )
    })

    const classElements = classChoices.map((classEl) => {
        return (
            <div className='ability-list'>
                <div className='ability-name'>{`Class: ${classEl.name}`}</div>
                <div className='ability-description'>{`Description: ${classEl.description}`}</div>
            </div>
        )
    })

    const abilitySelectElements = abilityChoices.map((ability) => {
        return (
            <option value={ability.id} onClick={chooseAbility} className='select-element'>{ability.name}</option>
        )
    })

    const classSelectElements = classChoices.map((classChoice) => {
        return (
            <option value={classChoice.id} onClick={chooseClass} className='select-element'>{classChoice.name}</option>
        )
    })


    return(
        <>
            <Nav />
            <div className='form-wrapper'>
                <div className='character-maker-form'>
                    <h2 className='char-maker-header'>Character Creator</h2>
                    <form className='form-area'>
                        <TextField label="Name" variant='outlined' className='text-field'/>
                        <textarea placeholder='Write your character backstory...' className='story-field'></textarea>
                        <div className='ability-intro'>Choose from a variety of unique abilities that fits with your playstyle.</div>
                        <div className='select-box-wrapper'>
                            <select className='selector-box'>
                                {abilitySelectElements}
                            </select>
                        </div>
                        {abilityElements}
                        <div className='class-intro'>Choose a unique class for your character.</div>
                        <div className='select-box-wrapper'>
                            <select className='selector-box'>
                                {classSelectElements}
                            </select>
                        </div>
                        {classElements}
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateCharacter;