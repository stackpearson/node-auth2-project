const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({authRouter: 'up'});
})


module.exports = router;