const itemButton = (item, statusMethod, currentUses, usesMethod, itemSetter, itemList, ogHealth, health, setHealth) => {
    if(currentUses === 1){
        const temp = [];
        console.log(itemList)
        for(let i = 0; i < itemList.length; i++){
            let itemObj = itemList[i];
            if(itemObj.name !== item.name) temp.push(itemObj);
        }
        itemSetter(temp);
    }

    if(item.name === 'Black Powder Bomb'){
        statusMethod('explosion')
        usesMethod(currentUses - 1);
        return;
    }

    if(item.name.includes('(Small)')){
        let newHealth = health + 10;
        console.log(ogHealth)
        if(newHealth >= ogHealth){
            setHealth(ogHealth)
        } else {
            setHealth(newHealth)
        }
        return;
    }

    if(item.name.includes('(Medium)')){
        let newHealth = health + 20;
        if(newHealth > ogHealth){
            setHealth(ogHealth)
        } else {
            setHealth(newHealth)
        }
        return;
    }

    if(item.name.includes('(Large)')){
        let newHealth = health + 60;
        if(newHealth > ogHealth){
            setHealth(ogHealth)
        } else {
            setHealth(newHealth)
        }
        return;
    }
}

export default itemButton;