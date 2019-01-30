var express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var router = express.Router();
var UserModel = require('../../models/user')

router.get('/',(req,res) => {
    UserModel.find()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro .'))
})

router.get('/:uid', (req,res) => {
    UserModel.findOne({email: req.params.uid})
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro'))
})

module.exports = router;