const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User, Character, Class, Weapon, Starter, Ability, Spell, Item} = require('../../db/models');
const { generateToken } = require('./security-utils');


const router = express.Router();

router.get('/form-data-info', asyncHandler(async function (req, res, next) {
    const abilities = await Ability.findAll();
    const classes = await Class.findAll();

    res.json({abilities, classes})
    return
}));

module.exports = router;