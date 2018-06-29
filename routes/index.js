var express = require('express')
var router = express.Router()

router.get('/', (req, res) => res.json({ 
    event: 'Docker with AWS' 
}));

router.get('/docker', (req, res) => res.json({
    about: 'Docker is awesome' 
}));

router.get('/docker/aws', (req, res) => res.json({
    about: 'AWS along with docker are life savers'
}));

router.get('/env-test', (req, res) => res.json({ 
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
}));

module.exports = router