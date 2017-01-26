const express = require('express');
const router = express.Router();
const knex = require('./connection');


module.exports = {
    getAll: function getUserByEmail (email){
        return knex ('coffee').where('email', email)
        .first();
    },
    getAll: function getAll (){
        return knex('user');
    },
    passwordHashed: function passwordHashed (password){
        return knex ('user').where('password', password)
        .first();
    },
};
