const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User, Character, Class, Weapon, Starter, Ability, Item} = require('../../db/models');
const { generateToken } = require('./security-utils');


const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
    const creatorId = 1
    const characters = await Character.findAll({ where:{ creatorId }});

    res.json(characters)
}));

module.exports = router;