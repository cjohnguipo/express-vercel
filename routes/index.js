const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const demo = require('./demo.route');

const r = Router();

r.use('/demo', demo);

// r.get('/', (req, res) => res.json(new SuccessResponseObject('express vercel boiler plate')));
r.get('/', (req, res) => res.html(new HTMLObjectElement( <h1>Welcome !!!</h1>));
    

module.exports = r;
