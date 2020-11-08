const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { Enemy } = require('../../db/models');
const { generateToken } = require('./security-utils');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();


router.get('/:letter', asyncHandler(async function (req, res, next) {
    const filterBy = req.params.letter
    // const monsters = await Enemy.findAll();
    const monsters = await Enemy.findAll({ where: { name: { [Op.like]: `${filterBy}%`} }});

    res.json(monsters)
    return
}));


module.exports = router;