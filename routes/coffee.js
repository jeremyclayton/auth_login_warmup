const express = require('express');
const router = express.Router();
// const knex = require('../db/queryCoffee.js');
var knex = require('../db/connection');

router.get('/', function(req, res, next) {
    return knex("coffee")
        .then(data => {
            res.json(data);
        });
});

router.get('/:id', function(req, res, next) {
    knex('coffee')
        .where("id", req.params.id)
        .then(data => {
            res.json(data);
        });
});

router.post('/', function(req, res, next) {
    knex('coffee').insert({
        type: req.body.type,
        dark: req.body.dark,
        country: req.body.country,
        user_id: req.body.user_id
    }).returning('*').then(data => {
        res.json(data);
        });
});
//
router.delete('/:id', (req, res) =>{
    let id = req.params.id;
    knex('coffee')
        .where('id', id)
        .del()
        .then(data => {
            res.json(data);
        });
});

router.put('/:id', (req, res) =>{
    let id = req.params.id;
    knex('coffee')
        .where('id', id)
        .update({
            type: req.body.type,
            dark: req.body.dark,
            country: req.body.country,
            user_id: req.body.user_id   
        }, 'id').then(data => {
            res.json(data);
        });
});

module.exports = router;
