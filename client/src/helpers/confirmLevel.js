const confirmLevel = (xp, setBool, nextXp, setNextXp) => {
    console.log('function invoked')
    console.log(nextXp)
    console.log(xp);

    if(nextXp <= xp){
        console.log('We made it into this condition')
        setBool(true)
        let newNext = nextXp * 2;
        setNextXp(newNext);
    }
}

export default confirmLevel;