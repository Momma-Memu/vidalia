const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { Class, Weapon, Spell, Item} = require('../../db/models');
const { generateToken } = require('./security-utils');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const cost = req.body.cost;
    const charClass = req.body.name;
    const weapons = Weapon.findAll({ where: { cost: { [Op.between]: [0, cost] } }})
    const items = Item.findAll({ where: { cost: { [Op.between]: [0, cost] } }})
    const spells = Spell.findAll();

    let drops = [];
    if(charClass !== 'Sorcerer'){
        drops = [...weapons, ...items]
    } else {
        drops = [...weapons, ...items, ...spells]
    }

    let numOfDrops = Math.floor(Math.random() * 5)

    if (numOfDrops === 0){
        numOfDrops += 1;
    }

    for(let i = 0; i < numOfDrops; i++){
        monsters.push(data[Math.floor(Math.random() * (data.length - 1))])
    }


    // res.json(chara)
}));

module.exports = router;