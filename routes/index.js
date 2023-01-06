const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const demo = require('./demo.route');
const users = require('./users');

const r = Router();

r.use('/users', users);
r.use('/demo', demo);

r.get('/', (req, res) => res.json(users));



module.exports = r;
