const express = require('express');
const router = express.Router();
const knex = require('../db/query.js');
const bcrypt = require('bcrypt');



router.get('/', function (req, res){
    knex.getAll().then(data => {
        res.json(data);
    });
});

router.post('/email', function (req, res){
    knex.getUserByEmail(req.body.email).then(data => {
        if (data){
            res.json(data);
        }
        else {
            res.status(500);
            res.send("your email was not found")
        }
    });
});

router.post('/password', function (req, res){
    knex.getUserByEmail(req.body.password).then(data => {
        if (data){
            res.json(data);
        }
        else {
            res.status(500);
            res.send("your password was not incorrect")
        }
    });
});
module.exports = router;
