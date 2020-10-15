const Users = require('./models/User');
const bcryptjs = require('bcryptjs');
const express = require('express');
const router = express.Router();

async function checkUserExists(form) {
    const userExists = await Users.findOne({ email: form.email });
    return userExists;
}

router.post('/login', async function (req, res) {
    const result = await checkUserExists(req.body);
    if (!result) {
        return res.status(400).send({
            message: 'User Not Found!',
            data: {},
        });
    }
    const pswdMatch = await bcryptjs.compare(
        req.body.password,
        result.password
    );
    if (pswdMatch) {
        return res.status(200).send({
            message: 'User Found!',
            data: result,
        });
    } else {
        return res.status(401).send({
            message: 'Wrong Password!',
            data: {},
        });
    }
});

module.exports = router;
