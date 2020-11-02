const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const { generateToken } = require('./security-utils');
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid').v4;

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { email, password } = req.body
    console.log(email, '======================')
    const user = await User.findOne({ where: { email } });
    if(!user){
        res.json({success: false, message: 'Password or email was incorrect.', status: 403});
        // res(403)
        return;
    }
    const compare = await bcrypt.compare(password, user.password, function(err, isMatch){
        if(isMatch){
            // return true
            // set cookie here
            const {jti, token} = generateToken(user)
            user.tokenId = jti;
            res.cookie('token', token);
            res.json({ id: user.id, userName:user.userName });
            return;
        } else {
            res.json({success: false, message: 'Password or email was incorrect.', status: 403});
            return
        }
    })
}));

module.exports = router;
