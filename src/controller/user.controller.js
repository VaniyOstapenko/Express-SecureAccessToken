const express = require('express');
const buildResponse = require('../helper/buildResponse');
const { createUser, authUser } = require('../service/user.service');

const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const data = await authUser(email, pwd);
        buildResponse(req, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.messsage);
    }
})

module.exports = route;