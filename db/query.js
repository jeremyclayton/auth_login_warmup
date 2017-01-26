const express = require('express');
const router = express.Router();
const knex = require('./connection');
const bcrypt = require('bcrypt');

module.exports = {
    getUserByEmail: function getUserByEmail (email){
        return knex ('user').where('email', email)
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
bcrypt.hashSync
